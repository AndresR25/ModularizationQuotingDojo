const express=require('express');
const QuoteRouter=express.Router();
const{QuoteController}=require('./../controllers/quoteController');
QuoteRouter
    .get('/Quote', QuoteController.loadWelcome);

QuoteRouter
    .post('/newQuote',QuoteController.createQuote);

QuoteRouter
    .get('/allquotes',QuoteController.getQuotes);

module.exports={QuoteRouter};