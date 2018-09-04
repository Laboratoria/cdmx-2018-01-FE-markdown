// Function to test Jest
// const suma = require('./lib/mdLinks');

// function sum(elementA, elementB) {
//   return elementA + elementB;
// }
// module.exports = sum;

'use strict';

// Require nodejs modules
const fs = require('fs'); // Allow to use the fs module
const path = require('path'); // Allow to use the path module
const markdownIt = require('markdown-it'); // Allow to use markdown-it library
// Create a new MarkdownIt with the rules that allow convert the text into links
const md = new markdownIt({
  html: true, // Enable HTML tags in source
  linkify: true // Autoconvert URL-like text to links
});
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
// const fetch = require('node-fetch');

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
    return false;
  };
};

const readMarkdownFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf8');
};

const convertMdToHtml = (readedFile) => {
  return md.render(readedFile);
};

const getTags = (htmlFile) => {
  const dom = new JSDOM(htmlFile);
  const linkTags = dom.window.document.getElementsByTagName('a');
  return linkTags;
};

const getInfoTags = (tagsCollection, absolutePath, links, linkObj) => {
  Array.from(tagsCollection).forEach(tag => {
    // console.log(`${tag.href} + ${tag.text}`);
    linkObj = {
      href: tag.href,
      text: tag.text,
      file: absolutePath
    };
    links.push(linkObj);
  });
  return links;
};

const mdLinks = (path, options) => {
  const links = [];
  const linkObj = {};

  const absolutePath = checkPathToAbsolute(path);
  // console.log(`The absolute path is: ${absolutePath}`);
  checkIfPathExist(absolutePath);
  // const pathExist = checkIfPathExist(absolutePath);
  // console.log('The path exist? ' + pathExist);

  const readedFile = readMarkdownFile(absolutePath);
  const convertedFile = convertMdToHtml(readedFile);
  const tags = getTags(convertedFile);
  const basicInfo = getInfoTags(tags, absolutePath, links, linkObj);
  console.log(basicInfo);

  // console.log(readedFile);
  // console.log(convertedFile);

  return `The original path was: ${path}`;
};

module.exports = mdLinks;


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
