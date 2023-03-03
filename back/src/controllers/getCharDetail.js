// const axios = require("axios");

// const getCharDetail = function (res, id) {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((data) => data.data)
//     .then((data) => {
//       const character = {
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         status: data.status,
//         origin: data.origin,
//         species: data.species,
//         id: data.id,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     }).catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Character not found");
//     });
// };

// module.exports = getCharDetail

const axios = require("axios");
const url = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async(req, res) => {
    const { id } = req.params;
    try {
        const result=await axios(`${url}${id}`);
        const datailApi=result.data;
            const detailChar = {
                id: datailApi.id,
                image: datailApi.image,
                name: datailApi.name,
                gender: datailApi.gender,
                species: datailApi.species,
                origin: datailApi.origin,
                status: datailApi.status,
            }
            res.status(200).send(detailChar);

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


module.exports = getCharDetail;
