const axios=require('axios');
const {Character}=require('../DB_connection')


const getApiData=async()=>{
    let i=1
    let Characters=[];
    try {
        while (i<6) {
            const apiData=await axios(`https://rickandmortyapi.com/api/character/?page=${i}`)
            Characters.push(apiData);
            i++
        };
        Characters=(await Promise.all(Characters)).map(res=>res.data.results.map(char=>{
            return{
                id:char.id,
                name:char.name,
                status:char.status,
                species:char.species,
                gender:char.gender,
                origin:char.origin.name,
                image:char.image
            }
        }))

        let allCharacters=[];
        Characters.map(char=>{allCharacters=allCharacters.concat(char)})

        return allCharacters;
    } catch (error) {
        return {error:error.message}
    }
}

const saveApiData=async () => {
    try {
        const allCharacters=await getApiData();
        await Character.bulkCreate(allCharacters)
        //nos permite pasarle un array de obj y los crea todos juntos en la DB
        return allCharacters;
    } catch (error) {
        return {error:error.message}
    }
}

module.exports={
    saveApiData
}