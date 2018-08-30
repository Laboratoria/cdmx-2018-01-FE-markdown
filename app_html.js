var http = require("http"),
fs = require("fs");
//guardamos en una variable lo que retorna
fs.readFile("./index.html", function(err,html){
    http.createServer(function(req,res){
        res.write(html);
        res.end();
        }).listen(8080);
});


