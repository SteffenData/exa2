/**
 * Created by steffen on 06-03-2016.
 */
// Explain, using relevant examples, the Express concept; middleware.

// the middleware like the body-parser make it possible to use the req.body,
// the concept with middleware is that there is alot of small pices of middleware
// there can be used in our code, it will say its precoded functions like the body-parser
// it make it possible to take out hte body of the request, and send the body back in a response.

// remember to add the middleware

router.get('/', function(reg,res){

    res.send('index',{
        title:'My app',
        items: todoitems
    })

})