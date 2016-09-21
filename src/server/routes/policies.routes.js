'use strict';

import { Router } from "express";
const router = new Router();

import Policies from '../controllers/policies/policies.controller';
const PoliciesController = new Policies();

// Get all suppliers list
router.route('/list').get(PoliciesController.getPolicyList); 

// Get specific product info
router.route('/info/:policy_id').get(PoliciesController.getPolicyInfo);

// Create new product
router.route('/').post(PoliciesController.createPolicy);

// Update existing product info
router.route('/:policy_id').put(PoliciesController.updatePolicy);

//Delete product
router.route('/:policy_id').delete(PoliciesController.deletePolicy);

export default router;

