const { Router } = require("express");

const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const getFavorite = require('../controllers/getFavorite');
const postFavorite = require('../controllers/postFavorite');
const deleteFavorite = require('../controllers/deleteFavorite');
const getAllChars=require('../controllers/getAllChars')

const router = Router();

router.get("/rickandmorty/character/:id", getCharById);
router.get( "/rickandmorty/detail/:id", getCharDetail);
router.get('/rickandmorty/fav', getFavorite);
router.post('/rickandmorty/fav', postFavorite);
router.delete('/rickandmorty/fav/:id', deleteFavorite);

router.get('/rickandmorty/allCharacters',async(req,res)=>{
    try {
        const allCharacter=await getAllChars();
        res.status(200).json(allCharacter);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports = { router }