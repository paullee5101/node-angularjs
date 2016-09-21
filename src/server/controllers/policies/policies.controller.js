'use strict';

import db from '../database';
import moment from 'moment';
import cuid from 'cuid';
import _ from 'lodash';

class Policies {
    
    constructor() {
        
    }

    getPolicyList(req, res) {
        db.query('select * from policies', function(err,row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }
    
    getPolicyInfo(req, res) {
        db.query('select * from policies where policy_id = ?',[_.escape(req.params.policy_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }

    createPolicy(req,res) {
       let sql = {
           policy_id: cuid(),
           owner: _.escape(req.body.owner),
           created:moment().format('YYYY/MM/DD HH:MM:ss'),
           active: 'y',
           company_id: _.escape(req.body.company_id),
           category_id: _.escape(req.body.category_id),
           policy_details: _.escape(req.body.policy_details),
           legal_details: _.escape(req.body.legal_details),
           terms: _.escape(req.body.terms)
       }
       
       db.query('INSERT INTO policies SET ?', sql, function(err, row){
           if(err){
               return res.status(500).json(err);
           }
           res.json({
               status: true,
               message: 'Done'
           });
       });
    }
    
    updatePolicy(req,res) {
        let sql = {
           owner: _.escape(req.body.owner),
           active: _.escape(req.body.active),
           company_id: _.escape(req.body.company_id),
           category_id: _.escape(req.body.category_id),
           policy_details: _.escape(req.body.policy_details),
           legal_details: _.escape(req.body.legal_details),
           terms: _.escape(req.body.terms)
        }
        
        db.query('UPDATE policies SET ? WHERE policy_id = ?', [sql, _.escape(req.params.policy_id)],function (err, row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                status:true,
                message:"done"
            });
        });
    }
    
    deletePolicy(req,res){
        db.query('delete from policies where policy_id = ?',[_.escape(req.params.policy_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json({
                message:"Policy has been removed."
            });
        });
    }
    
}

export default Policies;

