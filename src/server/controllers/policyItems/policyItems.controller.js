'use strict';

import db from '../database';
import cuid from 'cuid';
import _ from 'lodash';

class PolicyItems {
    
    constructor() {
        
    }

    getPolicyItemList(req, res) {
        db.query('select * from policy_items', function(err,row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }

    getPolicyItemInfo(req, res) {
        db.query('select * from policy_items where item_id = ?',[_.escape(req.params.item_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }

    createPolicyItem(req, res) {
        let sql = {
           item_id: cuid(),
           policy_id: _.escape(req.body.policy_id),
           policy_name: _.escape(req.body.policy_name),
           policy_value: _.escape(req.body.policy_value),
           terms: _.escape(req.body.terms),
           coverage: _.escape(req.body.coverage),
           not_covered: _.escape(req.body.not_covered)
       }
       
       db.query('INSERT INTO policy_items SET ?', sql, function(err,row){
           if(err){
               return res.status(500).json(err);
           }
           res.json({
               status: true,
               message: 'Done'
           });
       });
    }
    
    updatePolicyItem(req, res) {
        let sql = {
           policy_id: _.escape(req.body.policy_id),
           policy_name: _.escape(req.body.policy_name),
           policy_value: _.escape(req.body.policy_value),
           terms: _.escape(req.body.terms),
           coverage: _.escape(req.body.coverage),
           not_covered: _.escape(req.body.not_covered)
        }
        
        db.query('UPDATE policy_items SET ? WHERE item_id = ?', [sql, _.escape(req.params.item_id)],function (err,row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                status:true,
                message:"done"
            });
        });
    }
    
    deletePolicyItem(req,res){
        db.query('delete from policy_items where item_id = ?',[_.escape(req.params.item_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json({
                message:"Item has been removed."
            });
        });
    }
    
}

export default PolicyItems;

