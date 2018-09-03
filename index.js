#!/usr/bin/env node

// requirig file system module, path module
let fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const data = (error, data) => {
  if (error) {
    console.log('error:', error);
  } else {
    //  we want our regex to find "[text] (https://www.)" 
    let regEx = /\[([^\[\]]*)\]\(((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}))\)/g;
    //  matchedLinksArray is matching the regex with the specific pieces of data.
    let matchedRegEx = data.match(regEx);
    const newArrayFunction = matchedRegEx.map(element => { 
      // split is taking away  "[]" and "()"" because we don't need those characters in our object "     // console.log(splittingElement) will show us 4 elements in each array of the newArray (2 elements are empty spaces).
      let splittingElement = element.split(/\[([^[\]]*)\]\(([^()]*)\)/g);
      // because we need to retun an array of objects, i declared an object that has the obtained elements as values of the href and and the text
      const object = {
        href: splittingElement[2],
        text: splittingElement[1],
        status: null
      };
      fetch(splittingElement[2]).then((res=>{
        console.log(res);
      }
      ));
      return object;
    });
    // console.log(newArrayFunction);    
  }
  // absolutePath();
};

fs.readFile('./README.md', 'utf8', data);

const absolutePath = () =>{
  let actualPath = path.isAbsolute('./README.md');
  if ((actualPath) === false) {
    let newAbsolutePath = actualPath.resolve(); 
    console.log(newAbsolutePath);
  }
};

// const mdLinks = (path, options) => {
//   return 'test';
// };

// module.exports = mdLinks;


/* readFile, método asíncrono, recibe 3 parámetros. 1 es la ruta del archivo que queremos leer, el segundo es un string con el juego de
     caracteres en el que el archivo está codificado y el 3ro es una callback que se ejecutará en el momento en el que el archivo esta leído
    y se encuentra disponible para hacer alguna cosa */