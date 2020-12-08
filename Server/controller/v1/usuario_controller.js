const ModelUsuario = require('../../models/model_usuario');

//capturar errores
function errorHnadler(err, next, data) {
    if(err){
        return next(err);
    }
    if(!data){
        const err = new Error('No existe');
        err.statusCode = 500;
        return next(err);
    }
}

//Listar usuario

const listar = (req, res) =>{

    res.json({
        ok: true,
        usuarios:data
    })
}

//listar usuarioId

const getUsuarioId = async (req, res) =>{

    let usuarioId = req.params.id;

    modelUsuario = await ModelUsuario.findById(usuarioId).exec();

    res.json({
        result: true,
        usuario: modelUsuario
    })

}

//Resgistrar usuario

const registrar = (req, res, next) =>{

   let modelUsuario = new ModelUsuario(req.body);

   modelUsuario.save((err, data) =>{
       if(err || !data) return errorHnadler(err, next, data);

       res.json({
           result: true,
           usuario: data
       })
   })
}

//Actualizar usuario

const actualizar = (req, res) =>{

    res.json({
        ok: true,
        usuarios:data[0]
    })
}

//Borrar usuario

const borrar = (req, res) =>{

    res.json({
        ok: true,
        usuarios:data[0]
    })
}
module.exports = {
    listar,
    registrar,
    actualizar,
    borrar,
    getUsuarioId
}