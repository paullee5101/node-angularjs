'use strict';

import { Router } from "express";
const router = new Router();

import Users from '../controllers/users/users.controller';
const UsersController = new Users();

// Get all users list
router.route('/list').get(UsersController.getUsersList); 

// Get specific user info
router.route('/info/:user_id').get(UsersController.getUserInfo);

// Create new user
router.route('/').post(UsersController.createUser);

// Update existing user info
router.route('/:user_id').put(UsersController.updateUser);

//Delete user
router.route('/:user_id').delete(UsersController.deleteUser);

export default router;

