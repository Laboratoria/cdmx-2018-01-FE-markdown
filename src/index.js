

const { mdLink } = require('./js/md-links.js');

//"jsdom": "^12.0.0"

let path = './textprob.md';

mdLink(path)
.then(archivo =>  console.log(archivo));
  // console.log(mdLink('./textprob.md'));
