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
