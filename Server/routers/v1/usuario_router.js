const express = require('express');

const { 
    listar,
    registrar,
    actualizar,
    borrar,
    getUsuarioId
} = require('../../controller/v1/usuario_controller');

const router = express.Router();

router.get('/usuario', listar);
router.get('/usuario/:id', getUsuarioId);
router.put('/usuario/:id', actualizar);
router.post('/usuario', registrar);
router.delete('/usuario/:id', borrar);

module.exports = router;


