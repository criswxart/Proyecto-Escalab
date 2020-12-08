//Importar modelo
const Categoria = require('../../models/model_categoria');

//capturador de errores

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


//Listar categoria

const listar = (req, res) =>{
    
    Categoria.find().exec( (err, data) => {

        if(err || !data) return errorHnadler(err, next, data);
         

        res.json({
            ok: true,
            categorias:data
        });

    });
}

//Listar por ID
const getId = (req, res, next) =>{

    let id = req.params.id;

    Categoria.findById(id, (err, data) =>{

        if(err || !data) return errorHnadler(err, next, data);
         
        
        res.json({
            ok: true,
            categorias:data
        });

    });
}


//Resgistrar categoria

const registrar = (req, res, next) => {

    let data = {
        nombre: req.body.nombre,
        clasificacion: req.body.clasificacion
    }


   let categoria = new Categoria(data);

   categoria.save((err, data) =>{
    if(err || !data) return errorHnadler(err, next, data);

        res.json({
            ok: true,
            categorias:data
        });
   })
}

//Actualizar categoria

const actualizar = (req, res, next) => {

    let id = req.params.id;
    let data = {
        nombre: req.body.nombre,
        clasificacion: req.body.clasificacion
    }
    
    Categoria.findByIdAndUpdate(id, data, {new: true}, (err, data)=>{
       
        if(err || !data) return errorHnadler(err, next, data);

        res.json({
            ok: true,
            categorias:data
        })

    })
   
}

//Borrar categoria

const borrar = (req, res, next) =>{

    let id = req.params.id;

    Categoria.findByIdAndDelete(id,(err, data) =>{

        if(err || !data) return errorHnadler(err, next, data);

        res.json({
            ok: true,
            categorias:data
        })
    })
   
}


module.exports = {
    getId,
    listar,
    registrar,
    actualizar,
    borrar
}