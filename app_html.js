
var http = require("http"),
var fs = require("fs");
var ruta = require("path");

//guardamos en una variable lo que retorna
//fs.readFile("./index.html", function(err,html){
  //  http.createServer(function(req,res){
    //    res.write(html);
      //  res.end();
       // }).listen(8080);
//});

const ejecutar=()=>{
    const onRequest=(req,res)=>{
        var rutaArchivo='.' + ((req.url == '/')?'/index.htm':req.url);
        console.log("rutaArchivo");

        var ext=ruta.extname(rutaArchivo);
        var contentType = 'text/html';
        switch(ext){
            case '.css':
            contentType = 'text/css';
            break;
            case '.js':
            contentType = 'text/javascript';
            break;
        }
        ruta.exist(rutaArchivo, e = (existe)=>{
            if(existe){
                fs.readFile(rutaArchivo, e =(error,contenido)=>{
                    if(error){
                        res.writeHead(500);
                        res.end();
                    }
                    else{
                        res.writeHead(200,{'content-Type':contentType});
                        res.end(contenido);
                    }
                })
            }else{
                res.writeHead(404);
                res.end();
            }
        });
var server = http.creatServer().listen(3030);
console.log("servidor corriendo en puerto 3030")
        }
 exports.ejecutar = ejecutar;

    }
