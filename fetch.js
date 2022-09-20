let path_api = 'https://rickandmortyapi.com/api/character/?page=19';

fetch(path_api)
  .then(Response => Response.json())
  .then(data => {
    console.log(data);
    let data_result = data.results;
    let data_vivos = [];
    console.log(data_result);

    data_result.map(data =>{
      if (data.status == 'Alive') {
        data_vivos.push(data)
      }
    })

    console.log(data_vivos);
  });

