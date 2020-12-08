var mongoose = require('mongoose');


var Schema = mongoose.Schema;

//Creación del esquema de la entidad Usuario

var usuarioSchema = new Schema({

    nombre: { type: String, required:[true, 'El nombre del usuario es requerido']},
    email: { type: String, required:[true, 'El email  es requerido']},
    password: {type: Number, required: true},
    role: {type: String, default: 'USER_ROLE'},
    disponible: {type: Boolean, default: true},
    cart: {
      items: [{
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Producto'
        },
        cantidad: {
          type: Number,
          required: true
        },
        total: {
          type: Number,
          // required: true
        }
      }]
    }
},{timestamps: true},{collection: 'Usuarios'});

//método para agregar al carrito
usuarioSchema.methods.addCarrito = function( producto ){

    let index = this.cart.items.findIndex( item => {
  
      console.log(item);
      console.log(producto._id);
      
       return item.productId.toString() === producto._id.toString()
    })
  
    let _cantidad = 1;
    let newCartItems = [ ...this.cart.items]
  
    if(index >= 0){
      _cantidad = this.cart.items[index].cantidad +1;
      newCartItems[index].cantidad = _cantidad;
      newCartItems[index].total = _cantidad * producto.precio;
    }else{
      newCartItems.push({
        productId: producto._id,
        cantidad : _cantidad,
        total: producto.precio
      })
    }
  
    let newCart = {
      items: newCartItems
    }
  
    this.cart = newCart;
    return this.save();
  
  }

module.exports = mongoose.model('Usuario', usuarioSchema);