//Módulo de terceros
const express = require('express');

//modulo local
const {google} = require('../../controller/v2/login_controller')


const router = express.Router();

router.post('/google', google);

module.exports = router;