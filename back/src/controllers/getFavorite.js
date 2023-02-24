let  favs  = require('../utils/favs');

//suponiendo que tenemos base de datos aremos lop siguiente
// const getFavorite = async function(req, res) => {
//     try {
//         const fav=await favs.findAll()
//         res.status(200).json(favs)
//     } catch (error) {
//         res.status(400).send("error")
//     }

const getFavorite = (req, res) => {
    console.log("getFavorite")
    res.status(200).json(favs)
}

module.exports =  getFavorite 