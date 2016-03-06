/**
 * Created by steffen on 06-03-2016.
 */
//Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.
// mock our database

// we need to use the module nock
// var nock = require('nock') that does it able to test for urls without addiing anything to the database
//when we use the nock like below

var nock = require('nock');
var thissitetointercept = ('http://myproject.com')
    .post('/user',{
        username:'flamingo',
        email: 'something.com'
    })
    .reply(201,{
    ok: true,
    id:'123',
    rev:'4685'
})

// we say that we will intercept any urls to http://myproject.com'
// with the postrequest user: email:
// after that line we can begin the test of our api without adding the user to our database
//