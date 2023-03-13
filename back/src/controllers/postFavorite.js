const {Favorites}=require('../DB_connection')

const postFavorite =async (req, res) => {
    try {
        const { id, name, status, species, gender, origin, image } = req.body;
        if(!id || !name || !status || !species || !gender || !origin || !image) return res.status(404).json({message: 'Complete all fields'})
        const favorite = await Favorites.create({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
        })
        return res.status(200).json(favorite)
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}

module.exports =  postFavorite ;