const http = require('http');
const characters = require('../utils/data');
const PORT = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const url = req.url
    if (url.split("/rickandmorty/").length > 1) {
        let id = url.split("/rickandmorty/")[1]
        let data = characters.find(char => char.id == id)
        data? res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(data))
       :res.writeHead(404,{ 'Content-Type':'text/plain' }).end("Character not found")
        return
    }
    res.writeHead(404,{ 'Content-Type':'text/plain' }).end("Route not found")

}).listen(PORT, 'localhost')