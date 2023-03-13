const {Favorites}=require('../DB_connection')

const deleteFavorite =async (req, res) => {
try {
    const {id} = req.params;
    const favoriteDeleted = await Favorites.findByPk(id);
    if(!favoriteDeleted) return res.status(404).json({message: `There is not character with id ${id}`})

    favoriteDeleted.destroy();
    return res.status(200).json({message: 'Favorite deleted successfully'});
    
} catch (error) {
    return res.status(404).json({message: error.message}) 
}
}

module.exports = deleteFavorite;