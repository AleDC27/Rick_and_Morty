//const http = require('http');
//const { json } = require('node:stream/consumers');
//const characters = require('../utils/data');
//const PORT = 3001

//CLACE DE WEB SERVER
// http.createServer((req, res) => {
//     //con esta linea le damos acceso para el server a cualquier dominio
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if(req.url.includes("rickandmorty/character")){
//         let id=req.url.split("/").pop()

//         //filter nos devuelve un array , fin directamente el tipo de dato
//         let characters_filter=characters.find(chart=>chart.id===parseInt(id))

//         // JSON.stringify es para que tranforme el tipo de dato a json.
//         res.writeHead(200,{"content-type":"application/json"}).end(JSON.stringify(characters_filter))
//         //res.writeHead(200,{"content-type":"text/plain"}).end("JSON.stringify(characters_filter)")
//     }

// }).listen(PORT, 'localhost')

//PROMESAS
// const http = require("http");
// const PORT = 3001;
// const getCharById = require("../controllers/getCharById");
// const getCharDetail = require("../controllers/getChartDetail");

// http.createServer((req, res) => {

//     res.setHeader("Access-Control-Allow-Origin", "*");

//     let id = req.url.split("/").at(-1);
//     if (req.url.includes("onsearch")) {
//       return getCharById(res, id);
//     }

//     if (req.url.includes("detail")) {
//       return getCharDetail(res, id);
//     }else{
//         res.writeHead(404, { 'Content-Type': 'text/plain' })
//         res.end("Character not found");
//     }
//   })
//   .listen(PORT, 'localhost');

//antes creamos el server con node puro ahora con el frameword express


