require("chai").should();

var streamdir = require("../");

describe("streamdir", function(){

    it("should stream the contents of a directory", function(done){
        var s = streamdir(__dirname);
        s.on("data", function(fname){
            fname.should.equal("streamdir.test.js");
            done();
        });
    });

    it("should fail without a path", function(){
        streamdir().should.equal(false);
    });

});