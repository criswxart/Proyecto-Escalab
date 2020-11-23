const express = require('express');

const {
    getId,
    listar,
    registrar,
    actualizar,
    borrar
} = require('../../controller/v1/categoria_controller');

const router = express.Router();

router.get('/categoria', listar);
router.get('/categoria/:id', getId);
router.post('/categoria', registrar);
router.put('/categoria/:id', actualizar);
router.delete('/categoria/:id', borrar);

module.exports = router;
