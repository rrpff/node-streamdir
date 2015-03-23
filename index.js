var through = require("through"),
    fs = require("fs");

var streamdir = module.exports = function(path){
    if(!path) return false;
    var stream = through();
    fs.readdir(path, write.bind(stream));
    return stream;
}

var write = function(err, words){
    words.forEach(this.queue);
}