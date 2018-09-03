const fs = require('fs');
const path = require('path');

const rutaDoct = (data) => {
  // data es la ruta relativa del archivo README.md
  // console.log(data);
  if (!path.isAbsolute(data)) {
    let fileAbsolut = path.resolve(data);
    // console.log(fileAbsolut);
    fs.readFile(fileAbsolut, 'utf8', function(err, data) {
      if (err) {
        // console.log('no hay archivo');
      } else {
        let lines = data.split('\n');
        // console.log(lines);
        for (let i = 0; i < lines.length; i++) {
          let lineaPorLinea = lines[i];
          console.log(lineaPorLinea);
        }
      }
    });
  }
};

rutaDoct('./README.md');
