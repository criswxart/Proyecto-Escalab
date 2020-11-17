const express = require('express');

const { 
    listar,
    registrar,
    actualizar,
    borrar
} = require('../../controller/v1/categoria_controller');

const router = express.Router();

router.get('/categoria', listar);
router.put('/categoria/:id', actualizar);
router.post('/categoria', registrar);
router.delete('/categoria/:id', borrar);

module.exports = router;
