'use strict';

import { Router } from "express";
const router = new Router();

import PolicyItems from '../controllers/policyItems/policyItems.controller';
const PolicyItemsController = new PolicyItems();

// Get all policy items list
router.route('/list').get(PolicyItemsController.getPolicyItemList);

// Get specific policy item info
router.route('/info/:item_id').get(PolicyItemsController.getPolicyItemInfo);

// Create new policy item
router.route('/').post(PolicyItemsController.createPolicyItem);

// Update existing policy item info
router.route('/:item_id').put(PolicyItemsController.updatePolicyItem);

//Delete policy item
router.route('/:item_id').delete(PolicyItemsController.deletePolicyItem);

export default router;