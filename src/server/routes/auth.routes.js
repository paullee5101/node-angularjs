'use strict';

import { Router } from "express";
const router = new Router();

import Auth from '../middlewares/auth';
const auth = new Auth();

router.route('/revoke').post(auth.revokeAuthentication)
router.route('/signin').post(auth.userSignIn)
router.route('/signup').post(auth.userSignUp, auth.userSignIn)


export default router;