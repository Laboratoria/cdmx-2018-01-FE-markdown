const userFile = 'js/read.md';
let htmlFile = {}; // Objeto inicial htmlFile
let markedFile;
let arrayTotal = [];
const fs = require('fs'); //modules requirements Core Node Modules
const pathExt = require('path');
const myMarked = require('marked'); //modules requirements form another NPM libraries
const fetch = require('node-fetch'); //fecth require

const mdLinks = (path, options) => {
  const userTypeFile = pathExt.extname(path);
  if (userTypeFile !== '.md') {
    return console.log(
      'Incorrect type file! please give a .md file to review' +
        userTypeFile +
        ' is not an accepted file type'
    );
  }
  console.log('correct type file' + userTypeFile);
  fs.readFile(path, 'utf8', (error, file) => {
    if (error) {
      return console.log('Hay un error' + error);
    }
    linkSearcher(file); //function to find the links and text aboit links
  });
};

const linkSearcher = file => {
  htmlFile = myMarked(file); //Variables to keep matches
  const regExprLink = /href="(.*?)"/gi; //Give a regular expression to find the links in the href html tag, include lower and upper case
  const regExprATag = />[^<]*<[ ]*\/a[ ]*>/gi; //Give a regular expression to find the <a> html tag content, include lower and upper case
  const linkMatchesKeeper = htmlFile.match(regExprLink); //create new var  to keep the matches finded with the patterns of the regularexpr:
  const aTagMatchesKeeper = htmlFile.match(regExprATag);
  return stringCleaner(linkMatchesKeeper);
  stringTagCleanner(aTagMatchesKeeper);
};

const stringCleaner = stringstoClean => {
  const arrayOfLinkStrings = stringstoClean.map(
    item => (arrayTotal = item.slice(6, -1))
  );
  console.log('arrarTOTAL', arrayTotal);
  return linkValidator(arrayOfLinkStrings);
};

const stringTagCleanner = stringstoClean => {
  const arrayOfTagStrings = stringstoClean.map(item => item.slice(1, -4));
  return arrayOfTagStrings;
};

const linkValidator = arrayOfLinks => {
  arrayOfLinks.forEach(item => {
    fetch(item)
      .then(res => {
        console.log(item, res.status, res.ok);
      })
      .catch(err => console.log(err));
  });
};

//invocación mdLinks
mdLinks(
  userFile,
  (options = (stats, validate) => {
    console.log('Leyendo función de callback');
  })
);
// //promesa const promesa = () => {new Promise((resolve, reject) =>{ if(problema{reject(variable1)} resolve(variablecorrecta) )})}
// promesa.then() // mdLinks().then((res) => { return linkValidator(res) })
// mdLinks(userFile)
//   .then(linkSearcher(file))
//   .then(stringCleaner(linkMatchesKeeper), stringTagCleanner(aTagMatchesKeeper))
//   .then(linkValidator(arrayOfLinkStrings))
//   .then(console.log('final result:', objectRes))
//   .catch('error', error);

//export to testing
module.exports = {
  mdLinks
};
