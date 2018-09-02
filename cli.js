#!/usr/bin/env node

// con el módulo fs (file system) 
let fs = require('fs');
const path = require('path');

const data = (error, data) => {
  if (error) {
    console.log('error:', error);
  } else {
    let link = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/g;
    // let link = link.slice(0, -1);
    let matchedLinksArray = data.match(link);
    // console.log(matchedLinksArray);
    matchedLinksArray.forEach(element => { 
      let cleanElement = element.slice(0, -1);
      console.log(cleanElement);
      // absolutePath();
      // console.log(path.isAbsolute('./README.md'));
      // console.log(path.resolve('./README.md'));
    });
  }
};


/* readFile, método asíncrono, recibe 3 parámetros. 1 es la ruta del archivo que queremos leer, el segundo es un string con el juego de
     caracteres en el que el archivo está codificado y el 3ro es una callback que se ejecutará en el momento en el que el archivo esta leído
    y se encuentra disponible para hacer alguna cosa */

fs.readFile('./README.md', 'utf8', data);

// const absolutePath = () =>{
//   console.log(path.isAbsolute('./README.md'));
// };

const mdLinks = () => {
  return 'test';
};

module.exports = mdLinks;
