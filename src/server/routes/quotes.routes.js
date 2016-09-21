'use strict';

import { Router } from "express";
const router = new Router();

import Quotes from '../controllers/quotes/quotes.controller';
const QuotesController = new Quotes();

// Get all quotes list
router.route('/list').get(QuotesController.getQuoteList);

// Get specific quotesinfo
router.route('/info/:quote_id').get(QuotesController.getQuoteInfo);

// Create new quotes
router.route('/').post(QuotesController.createQuote);

// Update existing quotes info
router.route('/:quote_id').put(QuotesController.updateQuote);

//Delete quotes
router.route('/:quote_id').delete(QuotesController.deleteQuote);

export default router;