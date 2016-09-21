'use strict';

import db from '../database';
import moment from 'moment';
import cuid from 'cuid';
import _ from 'lodash';

class Companies {
    constructor() {
        
    }

    getCompanyList(req, res) {
        db.query('SELECT * FROM companies', function(err, row){
            if(err) {
                throw err;
            }
            res.json(row);
        
        });
    }

    getCompanyInfo(req, res) {
        db.query('select * from companies where company_id = ? ',[_.escape(req.params.company_id)],function (err, row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }

    createCompany(req,res) {
        let sql = {
           company_id: cuid(),
           owner: _.escape(req.body.owner),
           created:moment().format('YYYY/MM/DD HH:MM:ss'),
           active: _.escape(req.body.active),
           category_id: _.escape(req.body.category_id),
           logo: _.escape(req.body.logo),
           company_name: _.escape(req.body.company_name),
           est_year: _.escape(req.body.est_year),
           mailing_address: _.escape(req.body.mailing_address),
           billing_address:_.escape(req.body.billing_address),
           email: _.escape(req.body.phone),
           phone: _.escape(req.body.phone),
           fax: _.escape(req.body.fax),
           policies_sold_qty: _.escape(req.body.policies_sold_qty),
           profile: _.escape(req.body.profile)
       }
            
        db.query('INSERT INTO companies SET ?', sql, function(err, row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                status:true,
                message:"done"
            });
        });
    }
    
    updateCompany(req,res) {
        let sql = {
           owner: _.escape(req.body.owner),
           active:  _.escape(req.body.active),
           category_id: _.escape(req.body.category_id),
           logo: _.escape(req.body.logo),
           company_name: _.escape(req.body.company_name),
           est_year: _.escape(req.body.est_year),
           mailing_address: _.escape(req.body.mailing_address),
           billing_address:_.escape(req.body.billing_address),
           email: _.escape(req.body.email),
           phone: _.escape(req.body.phone),
           fax: _.escape(req.body.fax),
           policies_sold_qty: _.escape(req.body.policies_sold_qty),
           profile: _.escape(req.body.profile)
        }
        
        db.query('UPDATE companies SET ? WHERE company_id = ?', [sql, _.escape(req.params.company_id)],function (err, row){
            if(err) {
                return res.status(500).json(err);
            }
            res.json({
                status:true,
                message:"done"
            });
        });
    }
    
    deleteCompany(req,res){
        db.query('delete from companies where company_id = ?',[_.escape(req.params.company_id)],function (err, row){
            if(err){
               throw err;
            }
            res.json({
                message:"Company has been removed."
            });
        });
    }
    
}

export default Companies;

