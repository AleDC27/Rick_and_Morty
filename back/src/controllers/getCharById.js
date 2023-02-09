// const axios=require("axios")

// const getCharById=(res,id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response=>response.data)
//     .then(data=>{
//         let character={
//         id:data.id,
//         image:data.image,
//         name:data.name,
//         gender:data.gender,
//         species:data.species
//     }
//     res.writeHead(200,{"Content:Type":"application/json"}).end(JSON.stringify(character))
// })
// .catch(err=>res.writeHead(500,{"Content:Type":"text/plain"}).end("el id no esta"))  
// }

// module.exports=getCharById

const axios = require("axios");


const getCharById = function (res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((data) => data.data)
    .then((data) => {
      let character = {
        id: data.id,
        image: data.image,
        gender: data.gender,
        species: data.species,
        name: data.name,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Character not found123");
    })
};


module.exports = getCharById

