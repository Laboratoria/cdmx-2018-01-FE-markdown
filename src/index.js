const argv = require('yargs')
.command('options', 'Opciones para validar los links', {
  validate: {
    alias: 'v'
  }

})
.argv;


const { mdLink } = require('./js/md-links.js');

//"jsdom": "^12.0.0"

let path = './textprob.md';
console.log(argv);

//Primera función
// mdLink(path)
// .then(archivo =>  console.log(archivo))
// .catch(console.error());
