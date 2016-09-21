'use strict';

import {Router} from "express";
const router = new Router();

import Roles from '../controllers/roles/roles.controller';
const RolesController = new Roles();

// Get all roles list
router.route('/list').get(RolesController.getRoleList);

// Get specific rolesinfo
router.route('/info/:role_id').get(RolesController.getRoleInfo);

// Create new roles
router.route('/').post(RolesController.createRole);

// Update existing roles info
router.route('/:role_id').put(RolesController.updateRole);

//Delete roles
router.route('/:role_id').delete(RolesController.deleteRole);

export default router;