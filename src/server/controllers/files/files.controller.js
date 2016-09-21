'use strict';

import db from '../database';
import cuid from 'cuid';
import _ from 'lodash';

class Files {
    
    constructor() {
        
    }

    getFileList(req, res) {
        db.query('select * from files', function(err,row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }

    getFileInfo(req, res) {
        db.query('select * from files where file_id = ?',[_.escape(req.params.file_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json(row);
        });

    }

    createFile(req, res) {
        let sql = {
           file_id: cuid(),
           parent_id: _.escape(req.body.parent_id),
           filename: _.escape(req.body.filename)
       }
       
       db.query('INSERT INTO files SET ?', sql, function(err, row){
           if(err){
               return res.status(500).json(err);
           }
           res.json({
               status: true,
               message: 'Done'
           });
       });
    }
    
    updateFile(req, res) {
        let sql = {
            parent_id: _.escape(req.body.parent_id),
            filename: _.escape(req.body.filename)
        }
        
            
        db.query('UPDATE files SET ? WHERE file_id = ?', [sql, _.escape(req.params.file_id)],function (err, row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                status:true,
                message:"done"
            });
        });

    }
    
    deleteFile(req,res){
        db.query('delete from files where file_id = ?',[_.escape(req.params.file_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json({
                message:"File has been removed."
            });
        });
    }
    
}

export default Files;

