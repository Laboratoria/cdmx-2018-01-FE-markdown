#! / usr / bin / env node
const fs = require('fs');
const fetch = require('node-fetch');
let newArray = [];

// Funcion encargada de leer y obtener los links del readme
const readFile = () =>{
  fs.readFile('./README.md', 'utf-8', callback = (err, md)=>{
    if (err) {
      console.log('Tienes un error, verifica'); 
    } else {
      let data = md;
      let regExp = /(http:\/\/|https:\/\/|www\.)[^\s][^)]+/g;
      let results = data.match(regExp);
      runArray(results); 
    }
  });
};
readFile();

// Funcion encargada de iterar el array y obtener las promesas
const runArray = (results) => {
  for (let i = 0; i <= results.length; i++) {
    fetch(results[i]).then((res)=>{
      newArray.push({
        href: res.url,
        Status: res.status,
        Text: res.statusText
      });
    console.log(newArray);
    });
    
  }
};

module.exports = {
  readFile,
  runArray
};
