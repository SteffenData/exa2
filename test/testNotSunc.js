/**
 * Created by steffen on 02-03-2016.
 */
var expect = require("chai").expect;
var adder = require("../module");

describe("Test calculator",function(){

    it("should return 10 asynchronouesly", function(done){
        adder.addAsync(5,5,function(res){
            expect(res).to.be.equal(10);
            done();
        })
    })

})
