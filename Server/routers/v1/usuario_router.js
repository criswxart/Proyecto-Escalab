const express = require('express');

const { 
    listar,
    registrar,
    actualizar,
    borrar
} = require('../../controller/v1/usuario_controller');

const router = express.Router();

router.get('/usuario', listar);
router.put('/usuario/:id', actualizar);
router.post('/usuario', registrar);
router.delete('/usuario/:id', borrar);

module.exports = router;


