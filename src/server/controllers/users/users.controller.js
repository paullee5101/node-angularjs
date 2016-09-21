'use strict';

import db from '../database'
import moment from 'moment'
import cuid from 'cuid'
import _ from 'lodash'

class Users {
    constructor() {
        
    }

    getUsersList(req, res) {
        db.query('SELECT * FROM users', function(err, row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json(row);
        
        });
    }
    

    getUserInfo(req, res) {
        db.query('select * from users where user_id = ?',[_.escape(req.params.user_id)],function (err, row){
            if(err){
                return res.status(500).json(err);
            }
            res.json(row);
        });
    }

    createUser(req, res) {
        
        let sql = {
            user_id: cuid(),
            owner:_.escape(req.body.owner),
            created: moment().format('YYYY/MM/DD HH:MM:ss'),
            active: 'y',
            role_id:_.escape(req.body.role_id),
            company_id:_.escape(req.body.company_id),
            email: _.escape(req.body.email),
            secret:_.escape(req.body.secret),
            full_name: _.escape(req.body.full_name),
            gender:_.escape(req.body.gender),
            dob: _.escape(req.body.dob)
        }

        db.query('INSERT INTO users SET ?', sql, function (err, result){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                status:true,
                message:"done"
            });
        });
    }
    
    updateUser(req, res) {
        
        let sql = {
            owner:_.escape(req.body.owner),
            active: _.escape(req.body.active),
            role_id:_.escape(req.body.role_id),
            company_id:_.escape(req.body.company_id),
            email: _.escape(req.body.email),
            secret:_.escape(req.body.secret),
            full_name: _.escape(req.body.full_name),
            gender:_.escape(req.body.gender),
            dob: _.escape(req.body.dob)
        }
            
        db.query('UPDATE users SET ? WHERE user_id = ?', [ sql, _.escape(req.params.user_id)], function (err, row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                status:true,
                message:"done"
            });
        });
        
    }
    
    deleteUser(req,res){
        db.query('delete from users where user_id = ?',[_.escape(req.params.user_id)],function (err, row){
            if(err){
                console.log("User cannot be removed.");
            }
            res.json({
                message:"User has been removed."
            });
        });
    }
    
}

export default Users;

