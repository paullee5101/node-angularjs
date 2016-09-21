'use strict';

import { Router } from "express";
const router = new Router();

import Categories from '../controllers/categories/categories.controller';
const CategoriesController = new Categories();

// Get all category list
router.route('/list').get(CategoriesController.getCategoriesList);

// Get specific categoryinfo
router.route('/info/:category_id').get(CategoriesController.getCategoryInfo);

// Create new category
router.route('/').post(CategoriesController.createCategory);

// Update existing supplier info
router.route('/:category_id').put(CategoriesController.updateCategory);

//Delete category
router.route('/:category_id').delete(CategoriesController.deleteCategory);

export default router;