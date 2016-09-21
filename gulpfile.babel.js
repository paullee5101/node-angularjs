'use strict';
import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import watchify from 'watchify'

import browserify from 'browserify'
import source from 'vinyl-source-stream'
import gutil from 'gulp-util'
import uglify from 'gulp-uglify'
import streamify from 'gulp-streamify'
import cleanCSS from 'gulp-clean-css'
//import browserSync from 'browser-sync' 
import nodemon from 'gulp-nodemon'
import buffer from 'vinyl-buffer'
//import jshint from 'gulp-jshint'
import webserver from 'gulp-webserver'

let jsBundleCount = 0;

const meta = {
  "js_dev_output_filename"        : "bundle.js",
  "js_production_output_filename" : "bundle.min.js",
  "js_dest"                       : "./public/js"
};

const appBundler = browserify({
  entries : './src/client/jsx/App.js',
  debug   : true,
  cache: {}, // required for watchify
  packageCache: {}, // required for watchify
  fullPaths: true,
  plugin: [watchify]
});

const dirs = {
  src: 'src/client',
  dest: 'public'
};

const paths = {
  src: `${dirs.src}/scss/core.scss`,
  dest: `${dirs.dest}/styles/`
};

const bundleCSS = ()=> {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass({style:"compressed"}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility:'ie8'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest));
}

const bundleJS = (production)=> {
  if(production == true) {
    console.log("Start production bundler");
    appBundler
    .transform("babelify", {presets:["es2015", "react"]})
    .bundle()
    .on('error', gutil.log)
    .pipe(source(meta.js_production_output_filename))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(meta.js_dest));
    console.log("JS Bundle No: ["+jsBundleCount+"] "+"Done without [0] error");
    jsBundleCount++;
  } else {
    console.log("Start development bundler");
    appBundler
    .transform("babelify", {presets:["es2015", "react"]})
    .bundle()
    .on('error', gutil.log)
    .pipe(source(meta.js_dev_output_filename))
    .pipe(gulp.dest(meta.js_dest));
    console.log("JS Bundle No: ["+jsBundleCount+"] "+"Done without [0] error");
    jsBundleCount++;
  }
}

gulp.task('watch-sass', ()=> {
  return gulp.watch('src/client/scss/**', ['sass'], { interval: 750 });
});

gulp.task('watchify', ()=> {
  appBundler.on('update', ()=>{
    console.log('JS updated!', bundleJS(false))
  })
});

gulp.task('sass', ()=> {
  bundleCSS();
});

gulp.task('bundle-production-js', ()=> {
  bundleJS(true);
});

gulp.task('bundle-dev-js', ()=> {
  bundleJS(false);
});

gulp.task('nodemon', ()=> {
  nodemon({
        script: './start.js',
        ignore: ['public/', 'src/client/']
    });
});

gulp.task('default', ['nodemon','bundle-dev-js', 'watchify', 'sass', 'watch-sass']);

