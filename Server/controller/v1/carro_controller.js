const ModelUsuario = require('../../models/model_usuario');
const ModelProducto = require('../../models/model_producto');



//==========
//	Registrar Productos
//==========

const registrar = async (req, res, next) =>{

  let productoId = req.body.productoId;
  let usuarioId = req.body.usuarioId;
  
  modelProducto = await ModelProducto.findById(productoId).exec()

  console.log(modelProducto);

  if (modelProducto){
    modelUsuario = await ModelUsuario.findById(usuarioId).exec();

    console.log(modelUsuario);
    

    let respuesta = await modelUsuario.addCarrito(modelProducto);
    console.log(respuesta);
    res.json({
      result: true,
      usuario: respuesta
    })

  }

}

//==========
//	Listar Carro
//==========

const listarCarro = (req, res) => {
  console.log(req.docUsuario);

  req.docUsuario
    .populate('cart.items.productId', '-imagen', (err, item) => {
      res.json({
        result: true,
        usuario: item
      })
    });
}

// const lisgtarCarro = async (req, res) => {

//   let usuarioId = req.params.id;
//   console.log(usuarioId);


//   modelUsuario = await (await ModelUsuario.findById(usuarioId))
//     .populate('cart.items.productId').execPopulate();

//   res.json({
//     result: true,
//     usuario: modelUsuario
//   })

// }




module.exports = {
  registrar,
  listarCarro,
}