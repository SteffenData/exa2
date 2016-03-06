/**
 * Created by steffen on 02-03-2016.
 */
function add(n1,n2){

    return n1+n2
}

function addAsync(n1,n2,callback){

    setTimeout(function(){
        var result = n1+n2;
        callback(result);

    }),1000

}

module.exports.add = add;
module.exports.addAsync = addAsync;
//var res = addAsync(2,2,function(res){
//    console.log("Result" + res)
//});
//console.log("after " + res)