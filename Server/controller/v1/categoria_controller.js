//Importar modelo
const Categoria = require('../../models/model_categoria');


//Listar categoria

function listar(req, res) {
    


    Categoria.find().exec( (err, data) => {

        if(err){
            return res.status(500).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            categorias:data
        });

    });
}

//Listar por ID
function getId(req, res){

    let id = req.params.id;

    Categoria.findById(id, (err, data) =>{

        if(err){
            return res.status(500).json({
                ok: false,
                err: err.message
            })
        }
        res.json({
            ok: true,
            categorias:data
        });

    });
}


//Resgistrar categoria

function registrar(req, res) {

    let data = {
        nombre: req.body.nombre,
        clasificacion: req.body.clasificacion
    }


   let categoria = new Categoria(data);

   categoria.save((err, data) =>{
        if(err){
            return res.status(500).json({
                ok: false,
                err: err.message
            })
        }

        res.json({
            ok: true,
            categorias:data
        });
   })
}

//Actualizar categoria

function actualizar(req, res) {

    let id = req.params.id;
    let data = {
        nombre: req.body.nombre,
        clasificacion: req.body.clasificacion
    }
    
    Categoria.findByIdAndUpdate(id, data, {new: true}, (err, data)=>{
       
        if(err){
            return res.status(500).json({
                ok: false,
                err: err.message
            })
        }

        res.json({
            ok: true,
            categorias:data
        })

    })
   
}

//Borrar categoria

function borrar(req, res) {

    let id = req.params.id;

    Categoria.findByIdAndDelete(id,(err, data) =>{

        if(err){
            return res.status(500).json({
                ok: false,
                err: err.message
            })
        }

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