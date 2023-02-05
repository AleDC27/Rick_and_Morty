const http = require('http');
const { json } = require('node:stream/consumers');
const characters = require('../utils/data');
const PORT = 3001

http.createServer((req, res) => {
    //con esta linea le damos acceso para el server
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("rickandmorty/character")){
        let id=req.url.split("/").pop()

        //filter nos devuelve un array , fin directamente el tipo de dato
        let characters_filter=characters.find(chart=>chart.id===parseInt(id))

        // JSON.stringify es para que tranforme el tipo de dato a json.
        res.writeHead(200,{"content-type":"application/json"}).end(JSON.stringify(characters_filter))
        //res.writeHead(200,{"content-type":"text/plain"}).end("JSON.stringify(characters_filter)")
    }

}).listen(PORT, 'localhost')