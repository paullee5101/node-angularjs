'use strict';

import client from "mysql";
const db = client.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'wp_letscompare'
});
db.connect();
export default db;

import cuid from 'cuid';
import _ from 'lodash';

class Contents {
    
    constructor() {
        
    }

    getFAQ(req, res) {
        let sql  = 'SELECT post_title, post_content FROM wp_posts ';
            sql += 'WHERE post_type = "adonide_faq" ';
            sql += 'AND post_status = "publish" ';
            sql += 'ORDER BY post_date ASC ';
            sql += 'LIMIT 3 ';
        db.query(sql, function(err, row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                code: 0,
                faq_list: row
            });
        });
    }

    getHeroBanner(req, res) {
        let sql  = "SELECT p.guid AS banner FROM wp_posts p "
            sql += "WHERE p.ID IN ( "
            sql +=     "SELECT r.object_id FROM wp_term_relationships r "
            sql +=     "WHERE r.term_taxonomy_id = ( "
            sql +=         "SELECT id FROM wp_huge_itslider_sliders "
            sql +=         "LIMIT 1 "
            sql +=     ") "
            sql += ") "
            sql += "ORDER BY p.menu_order ";
            db.query(sql, function(err, row){
                if(err) {
                    return res.status(500).json(err);
                }
                res.json({
                    code: 0,
                    banner_list: row
                });
            });
    }

    getProductBanner(req, res) {
        let sql  = 'SELECT post_title, guid as banner FROM wp_posts ';
            sql += 'WHERE post_title ="life-insurance" ';
            sql += 'OR post_title ="personal-accidents" ';
            sql += 'OR post_title ="travel" ';
            sql += 'AND post_type="attachment" ';
        db.query(sql, (err, row) => {
            if(err) {
                return res.status(500).json(err);
            }

            res.json({
                code:0,
                banner_list: row
            });
        })
    }
    
/*
    getCategoryInfo(req, res) {
        
        db.query('SELECT * FROM categories WHERE category_id = ?', [ _.escape(req.params.category_id) ], function (err, row){
            if(err){
                return res.status(500).json(err);
            }
            res.json({
                code: 0,
                category: row
            });
        });
    }

    createCategory(req,res) {
       let sql = {
           category_id: cuid(),
           parent_id: _.escape(req.body.parent_id),
           taxonomy: _.escape(req.body.taxonomy),
           category_name: _.escape(req.body.category_name)
       }
       
       db.query('INSERT INTO categories SET ?', sql, function(err, row){
           if(err){
               return res.status(500).json(err);
           }
           res.json({
               status: true,
               message: 'Done'
           });
       });
    }
    
    updateCategory(req,res) {
        
        let sql = {
            parent_id: _.escape(req.body.parent_id),
            taxonomy: _.escape(req.body.taxonomy),
            category_name:_.escape(req.body.category_name)
        }
        
            
        db.query('UPDATE categories SET ? WHERE category_id = ?', [sql, _.escape(req.params.category_id)],function (err, row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                status:true,
                message:"done"
            });
        });
    }
    
    deleteCategory(req,res){
        db.query('delete from categories where category_id = ?',[_.escape(req.params.category_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json({
                message:"Category has been removed."
            });
        });
    }*/
}

export default Contents;

