//Módulo de express
const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Importación de Routers

//modulos locales
const routersV1 = require('./routers/v1/index');
const routersV2 = require('./routers/v2/index');

const URL_MONGO = 'mongodb+srv://Node4Gen:qT68PVujKUvx2tk9@cluster0.tj3qq.mongodb.net/Tienda?retryWrites=true&w=majority';


const app = express();
app.use(bodyParser.json());

routersV1(app);
routersV2(app);

mongoose.connect(URL_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{

    console.log('Mongo OK');

    app.listen(3000, ()=>{

        console.log('Server OK');
    
    });

}).catch((err)=> console.log(err));



