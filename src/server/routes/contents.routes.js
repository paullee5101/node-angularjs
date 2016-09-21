'use strict';

import { Router } from "express";
const router = new Router();

import Contents from '../controllers/contents/contents.controller';
const ContentsController = new Contents();

// Get all category list
router.route('/').get(ContentsController.getFAQ);
router.route('/hero-banner').get(ContentsController.getHeroBanner);
router.route('/product-banner').get(ContentsController.getProductBanner);
export default router;