#! / usr / bin / env node
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

// Funcion encargada de obtener la ruta absoluta
const checkRute = (ruta) =>{
  if (path.isAbsolute(ruta) === true) {
    console.log(ruta);
  } else {
    const newRute = path.resolve(ruta);
    console.log(newRute);
  } 
};
checkRute('./README.md');


// Funcion encargada de leer y obtener los links del readme
const readFile = () => {
  fs.readFile('README.md', 'utf-8', callback = (err, md) => {
    if (err) {
      console.log('Tienes un error, verifica');
    } else {
      let data = md;
      let regExp = /(http:\/\/|https:\/\/|www\.)[^\s][^)]+/g;
      let results = data.match(regExp);
      runArray(results);
      // console.log(results);
    }
  });
};
readFile();

// Funcion encargada de iterar el array y obtener las promesas
const runArray = (results) => {
  let newArray = [];
  for (let i = 0; i <= results.length; i++) {
    fetch(results[i]).then((res) => {
      newArray.push({
        href: res.url,
        status: res.status,
      });
      console.log(newArray);
    });
  }
};

module.exports = {
  readFile,
  runArray
};
