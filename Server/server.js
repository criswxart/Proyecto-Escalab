//Módulo de express
const express = require('express');
// Importación de Routers

const routersV1 = require('./routers/v1/index');
const routersV2 = require('./routers/v2/index');


const app = express();

routersV1(app);
routersV2(app);

app.listen(3000, ()=>{

    console.log('Server OK');

});