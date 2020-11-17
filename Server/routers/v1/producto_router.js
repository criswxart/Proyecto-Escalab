const express = require('express');

const { 
    listar,
    registrar,
    actualizar,
    borrar
} = require('../../controller/v1/producto_controller');

const router = express.Router();

router.get('/producto', listar);
router.post('/producto', registrar);
router.put('/producto/:id', actualizar);
router.delete('/producto/:id', borrar);

module.exports = router;
