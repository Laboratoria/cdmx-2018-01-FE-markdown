const fs = require("fs");
const path = require('path');
// const pruebaFile ="file.txt";

// fs.readFile(path[, options], callback)
//  utf8 is an encoding value, ya no es necesario usar toString()
// Asynchronously reads the entire contents of a file
// The callback is passed two arguments (err, data), where data is the contents of the file
fs.readFile(path.basename('file.txt'), 'utf8', (err, data) =>{
  if (err) throw err;
  console.log(data);    
});
