let favs = require('../utils/favs');

const deleteFavorite = (req, res) => {
    const {id} = req.params;
    console.log(id)
    if(id){
        let charIndex = favs.findIndex(charac => charac.id === Number(id));
        favs.splice(charIndex,1)
           console.log(favs)
           return res.status(200).json(favs)
    }
   return res.status(400).send("no hay nada")
}

module.exports = deleteFavorite;