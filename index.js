// Function to test Jest
// const suma = require('./lib/mdLinks');

// function sum(elementA, elementB) {
//   return elementA + elementB;
// }
// module.exports = sum;

'use strict';

// Require nodejs modules
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// Function to ensure that path is absolute
const checkPathToAbsolute = (pathToCheck) => {
  const isAbsolute = path.isAbsolute(pathToCheck);
  if (isAbsolute) {
    // console.log(isAbsolute);
    return pathToCheck;
  } else {
    // console.log(isAbsolute);
    pathToCheck = path.resolve(pathToCheck);
    // console.log(path.isAbsolute(pathToCheck));
    return pathToCheck;
  }
  // return isAbsolute;
};

// Function to check if a path exist
const checkIfPathExist = (absolutePath) => {
  if (fs.existsSync(absolutePath)) {
    return true;
  } else {
    process.on('exit', () => {
      console.log('ERROR: The path is incorrect or inexistent')
    });
    process.exit();
  }
};

const mdLinks = (path, options) => {
  const absolutePath = checkPathToAbsolute(path);
  // console.log(absolutePath);
  const pathExist = checkIfPathExist(absolutePath);
  console.log(pathExist);

  return `${path}`;
};

module.exports = mdLinks;

// Allow to use the fs module
// const fs = require('fs');
// Allow to use the markdown-link-extractor module
// const markdownLinkExtractor = require('markdown-link-extractor');

// Call the md file and convert to string
// const markdown = fs.readFileSync('README.md').toString();
// console.log(markdown);

// Extract the links
// const links = markdownLinkExtractor(markdown);
// console.log(links.length);
// Display in console each link
// links.forEach(link => console.log(link));
