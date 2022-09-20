/* creamos una variable para 
guardar la ruta de las bases de datos de las estrellas*/

let ruta = 'https://raw.githubusercontent.com/astronexus/HYG-Database/master/hygdata_v3.csv';

/* usamos el metodo fetch para la llamada de datos  de nuestra ruta*/

fetch(ruta)
  .then(response => response.text())
  .then(data => {
    
    /*creamos las filas de nuestro documento
    .csv -> recuerda que es un documento 
    de excel convertido a texto */

    let rows = data.split('\n');

    /*creamos las columnas de nuestro documento
    .csv -> recuerda que es un documento 
    de excel convertido a texto */

    let cols = rows.map(el => el.split(','));

    /*vamos a filtar nuestra tabla de datos 
    quitando dotos los datos que tienen un 
    nombre vacio*/

    let properValue = cols.filter(name_star => name_star[6] != '');

    /*creamos un array con objetos, estos objetos 
    tienen la informacion de nuestra tabla filtrada */

    let final_star_array = properValue.map(final_star => {
      return {
        id: final_star[0],
        name: final_star[6],
        coordenadas: `x: ${final_star[17]}, y: ${final_star[18]}, z: ${final_star[19]}`
      }
    });

    /* quitamos la primera y ultima colomna ya que no tenian 
    informacion necesaria. */

    final_star_array.pop();
    final_star_array.shift();

    //console.table(final_star_array);

    //creamos una variable con el padre de nuestras cards

    let container = document.querySelector('.row');
    
    //creamos una funcion para mostrar las cartas en el DOM 

    final_star_array.forEach(estrella => {

      //creo las columnas para cada una de mis cards
      let div_cols = document.createElement('div');

      //añado estas columnas al padre en html
      container.appendChild(div_cols);

      //añadimos el contenido a mis columnas

      div_cols.innerHTML = `
        <div class="card text-bg-warning mb-3 me-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${estrella.name}</h5>
          <p class="card-text">id: ${estrella.id}</p>
          <p class="card-text">coordenadas: ${estrella.coordenadas}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      `
    });
    
  });



