const express = require('express');
const { router } = require('../routes/index');
const cors = require('cors')
const PORT = 3001;
const {saveApiData}=require('../controllers/saveApiData');
const {sequelize}=require('../DB_connection');
const Character = require('../models/Character');

const server = express();

server.use(express.json());
server.use(cors());

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Autorizo recibir solicitudes de este dominio
   res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
   next();
});

server.use('/', router);


sequelize.sync({force:true}).then(async()=>{
   console.log("antes del saveApiData")
   //console.log(await saveApiData())
   //console.log(Character)
   await saveApiData();
   console.log("db,connect")
   server.listen(PORT, () => {
      console.log('Server raised in port ' + PORT);
   });
})



