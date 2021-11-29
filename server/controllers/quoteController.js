const {QuoteModel}=require('./../models/userModel')

const QuoteController={
    loadWelcome:function(request, response) {
        response.render('welcome');
    },
    createQuote:function(request,response){
        const name=request.body.name;
        const quote=request.body.quote;
        const newQuote={
            name,
            quote
        };
        QuoteModel
            .createModel(newQuote)
            .then(result=>{
                console.log(result);
                response.redirect('/quotes/allquotes');
            })
            .catch(error=>{
                request.flash('quote',"Name and Quote must be greater than 5 characters");
                response.redirect('/quotes/Quote');
            });
    },
    getQuotes:function(request, response) {
        QuoteModel
        .findQuote()
        .then(data=>{
            console.log(data)
            response.render('quotes',{quotes:data});
        })
    }
}

module.exports={QuoteController};