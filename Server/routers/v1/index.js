
const loginRouter = require('./login_router');
const UsuarioRouter = require('./usuario_router')
const CategoriaRouter = require('./categoria_router')

module.exports = (app) =>{

    app.use('/api/v1', loginRouter);
    app.use('/api/v1', UsuarioRouter);
    app.use('/api/v1', CategoriaRouter);

}