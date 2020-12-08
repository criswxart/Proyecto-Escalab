
const loginRouter = require('./login_router');
const UsuarioRouter = require('./usuario_router');
const CategoriaRouter = require('./categoria_router');
const ComentarioRouter = require('./comentarios_router');
const ProductoRouter = require('./producto_router');
const CarroRouter = require('./carro_router');

module.exports = (app) =>{

    app.use('/api/v1', loginRouter);
    app.use('/api/v1', UsuarioRouter);
    app.use('/api/v1', CategoriaRouter);
    app.use('/api/v1', ComentarioRouter);
    app.use('/api/v1', ProductoRouter);
    app.use('/api/v1', CarroRouter);
}