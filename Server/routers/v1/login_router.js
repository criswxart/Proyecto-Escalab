//Módulo de terceros
const express = require('express');

//modulo local
const {login} = require('../../controller/v1/login_controller')


const router = express.Router();

router.post('/login', login);


module.exports = router;


