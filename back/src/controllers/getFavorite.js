const {Favorites}=require('../DB_connection');

const getFavorite =async (req, res) => {
    try {
        const favorites=await Favorites.findAll();
        favorites.length===0?res.status(404).send('No favorites yet')
        :res.status(200).json(favorites)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports =  getFavorite 