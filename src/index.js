

const { mdLink } = require('./js/md-links.js');

//"jsdom": "^12.0.0"

let path = './textprob.md';

//Primera función
mdLink(path)
.then(archivo =>  console.log(archivo))
.catch(console.error());
  // console.log(mdLink('./textprob.md'));
