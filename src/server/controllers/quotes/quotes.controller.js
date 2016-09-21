'use strict';

import db from '../database';
import moment from 'moment';
import cuid from 'cuid';
import _ from 'lodash';

class Quotes {
    
    constructor() {
        
    }

    getQuoteList(req, res) {
        db.query('select * from quotes', function(err,row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }
    
    getQuoteInfo(req, res) {
        db.query('select * from quotes where quote_id = ?',[_.escape(req.params.quote_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }

    createQuote(req, res) {
        let sql = {
           quote_id: cuid(),
           owner: _.escape(req.body.owner),
           created: moment().format('YYYY/MM/DD HH:MM:ss'),
           policy_id: _.escape(req.body.policy_id),
           price: _.escape(req.body.price)
       }
       
       db.query('INSERT INTO quotes SET ?', sql, function(err,row){
           if(err){
               return res.status(500).json(err);
           }
           res.json({
               status: true,
               message: 'Done'
           });
       });
    }
    
    updateQuote(req, res) {
        let sql = {
            owner: _.escape(req.body.owner),
            policy_id: _.escape(req.body.policy_id),
            price: _.escape(req.body.price)
        }
        
            
        db.query('UPDATE quotes SET ? WHERE quote_id = ?', [sql, _.escape(req.params.quote_id)],function (err,row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                status:true,
                message:"done"
            });
        });
    }
    
    deleteQuote(req,res){
        db.query('delete from quotes where quote_id = ?',[_.escape(req.params.quote_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json({
                message:"Quote has been removed."
            });
        });
    }
}

export default Quotes;

