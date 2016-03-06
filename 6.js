/**
 * Created by steffen on 06-03-2016.
 */
// Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.
// the problem can be that you type something and submit it, but the session
// the general problem is that we have to be carefull what we store on the client, like a id, will be easy to asses ´
// but this one is fine


var session = require('express-session')

app.use(session({secret: 'keyboard cat', cokie:{magAge:9000}}))
app.use("/session",session);


router.get("/",function(req,res,next){
        var sess = req.session
        var name = req.query.name
        if(typeof name !=="undefined"){
            res.redirect("/session")
            return;
        }

    }
)