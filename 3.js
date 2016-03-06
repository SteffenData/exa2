/**
 * Created by steffen on 06-03-2016.
 */
    // the problem is that node.js is singlethreaded, and it wont rund on the other cores on your computer,
// one way to solve this is to use the cluster api, i dont have a clue how it work yet :). its look alot like the threadpool in java
    // it still have the same problems like other laungues... it take more resourses.
    // and the workers suddenly dies, so we need some code to remove dead threads and fill new in.
    //look again

//http://mobilenext.net/scaling-node-js-multi-core-systems/


var cluster = require('cluster');

if(cluster.isMaster) {
    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for(var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    var app = require('express')();
    app.all('/*', function(req, res) {res.send('process ' + process.pid + ' says hello!').end();})

    var server = app.listen(8000, function() {
        console.log('Process ' + process.pid + ' is listening to all incoming requests');
    });
}