const express = require('express');

const { 
    listar,
    registrar,
    actualizar,
    borrar
} = require('../../controller/v1/comentarios_controller');

const router = express.Router();

router.get('/comentario', listar);
router.post('/comentario', registrar);
router.put('/comentario/:id', actualizar);
router.delete('/comentario/:id', borrar);

module.exports = router;
