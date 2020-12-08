const ModelProducto = require('../../models/model_producto');

//Listar productos

const listar = (req, res) =>{

    res.json({
        ok: true,
        productos:data
    })
}

//Crear producto

const registrar = (req, res) => {

    let data = {
        producto_nombre: req.body.producto_nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        vendidos: req.body.vendidos,
        disponible: req.body.disponible,
        categoria_nombre: req.body.categoria_nombre
    }

    let modelProducto = new ModelProducto(data);

    modelProducto.save((err, data) =>{

        if(err){
            return res.status(500).json({
                result: false,
                err: err.message
            })
        }
        res.json({
            result: true,
            productos: data
        })

    });
    
}

//Actualizar producto

const actualizar = (req, res) =>{

    res.json({
        ok: true,
        productos:data[0]
    })
}

//Borrar producto

const borrar = (req, res) =>{

    res.json({
        ok: true,
        productos:data[0]
    })
}
module.exports = {
    listar,
    registrar,
    actualizar,
    borrar
}