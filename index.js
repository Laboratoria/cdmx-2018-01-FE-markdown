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
const jsdom = require('jsdom'); // Allow to use jsdom library
const { JSDOM } = jsdom; // Simulate a new DOM and allow us to work with it
const fetch = require('node-fetch');
// const request = require('request');

// Function to ensure that path is absolute
const checkPathToAbsolute = (pathToCheck) => {
  pathToCheck = path.resolve(pathToCheck);
  return pathToCheck;
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
  const exp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
  Array.from(tagsCollection).forEach(tag => {
    // console.log(`${tag.href} + ${tag.text}`);
    if (tag.href.match(exp)) {
      linkObj = {
        href: tag.href,
        text: tag.text.slice(0, 50),
        file: absolutePath,
        status: '',
        statusText: ''
      };
      links.push(linkObj);
    }
  });
  return links;
};

const processAnswer = (basicInfo) => {
  let returnedAnswer = '';
  basicInfo.forEach(element => {
    returnedAnswer += `${element.file}  ${element.href}  ${element.text}
`;
  });
  return returnedAnswer;
};

// Trying with ES2017 async/await function

// const requestAsync = (link) => {
//   return new Promise((resolve, reject) => {
//     const req = request(url, (err, response, body) => {
//       if (err) {
//         return reject(err, response, body);
//       }
//       resolve(JSON.parse(body));
//     });
//   });
// };

// async function getResponse(links) {
//   try {
//     let response = await Promise.all(links.map(requestAsync));
//   } catch (err) {
//     console.log(err);
//   }
//   return response;
// };

// const validateLinks = (linksArray) => {
//   const responses = [];
//   for (const link of linksArray) {
//     responses.push(link.href);
//   }
//   console.log(getResponse(responses));
//   return 'hola';
// };
// ------------------------------------------

// Trying with fetch

// const getResponse = (url) => {
//   // console.log(url);
//   let response = fetch(url)
//     .then((res) => {
//       console.log(res.status);
//       return res.status;
//     }).catch((err) => {
//       console.log('Error al hacer el fetch');
//     });

//   console.log('Respuesta: ' + response);

//   return response;

// const response = Promise.all(fetch(url)
// );
// const response = Promise.all(urls.map((url) => {
//   return fetch(url)
//     .then((res) => {
//       Promise.all(console.log(res.status));
//     });
// }));
// // console.log(response);
// return response;
// };

// const validateLinks = (linksArray) => {
//   // const responses = [];
//   for (const link of linksArray) {
//     getResponse(link.href);
//     // responses.push(link.href);
//   }
//   // console.log(responses);
//   // return getResponse(responses[0]);
// };
// ------------------------------------------
const printResult = (obj) => {
  return console.log(obj);
};

const processAnswerValidate = (basicInfo) => {
  // console.log(validateLinks(tag.href, linkObj));
  // basicInfo.forEach(obj => {
  //   fetch(obj.href)
  //     .then((res) => {
  //       obj.status = res.status;
  //       obj.statusText = res.statusText;
  //       return printResult(obj);
  //       // const response = [res.status, res.statusText];
  //       // console.log(response);
  //       // return response;
  //     })
  //     .catch((err) => {
  //       err = new Error('Not Found');
  //       err.status = 404;
  //       err.statusText = 'Not Found';
  //       obj.status = err.status;
  //       obj.statusText = err.statusText;
  //       return printResult(obj);
  //       // const response = [err.status, err.statusText];
  //       // console.log(response);
  //       // return response;
  //       // // console.log(err.status);
  //       // // return obj;
  //     });
  // });
  // // return basicInfo;

  return basicInfo.map(obj => {
    fetch(obj.href)
      .then((res) => {
        obj.status = res.status;
        obj.statusText = res.statusText;
        return printResult(obj);
        // const response = [res.status, res.statusText];
        // console.log(response);
        // return response;
      })
      .catch((err) => {
        err = new Error('Not Found');
        err.status = 404;
        err.statusText = 'Not Found';
        obj.status = err.status;
        obj.statusText = err.statusText;
        return printResult(obj);
        // const response = [err.status, err.statusText];
        // console.log(response);
        // return response;
        // // console.log(err.status);
        // // return obj;
      });
  });
  // return basicInfo;
};

const mdLinks = (path, options) => {
  const links = [];
  const linkObj = {};
  let answer = '';

  const absolutePath = checkPathToAbsolute(path);
  // console.log(`The absolute path is: ${absolutePath}`);
  checkIfPathExist(absolutePath);
  // const pathExist = checkIfPathExist(absolutePath);
  // console.log('The path exist? ' + pathExist);

  const readedFile = readMarkdownFile(absolutePath);
  const convertedFile = convertMdToHtml(readedFile);
  const tags = getTags(convertedFile);
  const basicInfo = getInfoTags(tags, path, links, linkObj);
  if (options.validate === false && options.stats === false) {
    return processAnswer(basicInfo);
  } else if (options.validate === true || options.stats === true) {
    // console.log(links);
    return processAnswerValidate(basicInfo);
  }
  // console.log(basicInfo);

  // console.log(readedFile);
  // console.log(convertedFile);

  // return answer;
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
