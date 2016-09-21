'use strict';

import db from '../database';
import cuid from 'cuid';
import _ from 'lodash';

class Roles {
    
    constructor() {
        
    }

    getRoleList(req, res) {
        db.query('select * from roles', function(err,row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }

    getRoleInfo(req, res) {
        db.query('select * from roles where role_id = ?',[_.escape(req.params.role_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }

    createRole(req, res) {
        let sql = {
           role_id: cuid(),
           role_name: _.escape(req.body.role_name),
           permissions: _.escape(req.body.permissions)
       }
       
       db.query('INSERT INTO roles SET ?', sql, function(err,row){
           if(err){
               return res.status(500).json(err);
           }
           res.json({
               status: true,
               message: 'Done'
           });
       });
    }
    
    updateRole(req, res) {
        let sql = {
            role_name: _.escape(req.body.role_name),
            permissions: _.escape(req.body.permissions)
        }
        
            
        db.query('UPDATE roles SET ? WHERE role_id = ?', [sql, _.escape(req.params.role_id)],function (err,row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                status:true,
                message:"done"
            });
        });
    }
    
    deleteRole(req,res){
        db.query('delete from roles where role_id = ?',[_.escape(req.params.role_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json({
                message:"Role has been removed."
            });
        });
    }
}

export default Roles;

