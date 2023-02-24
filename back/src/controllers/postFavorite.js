let favs = require('../utils/favs');

const postFavorite = (req, res) => {
    console.log("entramos")
    const character = req.body;
    if(character){
        console.log("entramos a chart")
     let exists=favs.find(cur=>cur.id===character.id);
     if(!exists){
        favs.push(character);
        console.log("postfav agregado")
        console.log(favs)
        return res.status(200).json(character)
     }
    }
    console.log("ya existe ese ")
    return res.status(400).send("ya existe este chart")
}

module.exports =  postFavorite ;