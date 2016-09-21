'use strict';

import db from '../database';
import cuid from 'cuid';
import _ from 'lodash';

class Categories {
    
    constructor() {
        
    }

    getCategoriesList(req, res) {
        let sql = 'SELECT * FROM categories ';
        if(req.query.taxonomy){
            sql += 'WHERE taxonomy ="' + req.query.taxonomy+'" ';
        }
        
        db.query(sql, function(err, row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                code: 0,
                categories: row
            });
        });
    }
    

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
    }
}

export default Categories;

