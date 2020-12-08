const express = require('express');
const {

  registrar,
  listarCarro,
} = require('../../controller/v1/carro_controller')

const router = express.Router();



//router
router.post('/carro/', registrar);
router.get('/carro/:usuarioId', listarCarro);



module.exports = router;