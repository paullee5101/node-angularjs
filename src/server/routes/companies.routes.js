'use strict';

import { Router } from "express";
const router = new Router();

import Companies from '../controllers/companies/companies.controller';
const CompaniesController = new Companies();

// Get all category list
router.route('/list').get(CompaniesController.getCompanyList);

// Get specific categoryinfo
router.route('/info/:company_id').get(CompaniesController.getCompanyInfo);

// Create new category
router.route('/').post(CompaniesController.createCompany);

// Update existing supplier info
router.route('/:company_id').put(CompaniesController.updateCompany);

//Delete companies
router.route('/:company_id').delete(CompaniesController.deleteCompany);

export default router;