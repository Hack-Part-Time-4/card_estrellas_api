let fs = require('fs');

// nuestro objetivo es poder leer los datos de nuestro archivo md

function read(pathFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathFile, 'utf8', (flor, fileContent) => {
      if (flor) {
        return reject(flor); 
      }
      console.log(fileContent);

      resolve()

    })
  })
};

read('C:/Users/jhona/aulab/fech_api/otros-dato.md')
  .then(()=> {console.log("felicidades");});
