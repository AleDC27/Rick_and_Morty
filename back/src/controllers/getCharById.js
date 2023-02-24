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

// const axios = require("axios");


// const getCharById = function (res, id) {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((data) => data.data)
//     .then((data) => {
//       let character = {
//         id: data.id,
//         image: data.image,
//         gender: data.gender,
//         species: data.species,
//         name: data.name,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Character not found123");
//     })
// };


// module.exports = getCharById


const axios = require("axios");
const url = 'https://rickandmortyapi.com/api/character/';

const getCharById =async (req, res) => {
    const { id } = req.params;
    try {
       const result= await axios(`${url}${id}`);
       const characterApi=result.data;
            const character = {
                id: characterApi.id,
                image: characterApi.image,
                name: characterApi.name,
                gender: characterApi.gender,
                species: characterApi.species
            }
            res.status(200).json(character);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = getCharById;
