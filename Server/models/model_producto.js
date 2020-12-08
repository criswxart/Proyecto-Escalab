var mongoose = require('mongoose');

//Importación del modelo
const ModelCategoria = require('../models/model_categoria');

//Función de validación

const validator = async (val) => {


    let rpta = await ModelCategoria.exists(
        {nombre: val}
    )
    return rpta;
}

var Schema = mongoose.Schema;

//Creación del esquema de la entidad Producto

var productoSchema = new Schema({

    producto_nombre: { type: String, required:[true, 'El nombre del producto es requerido']},
    descripcion: { type: String, required:[true, 'La descipción del producto es requerido']},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
    vendidos: {type: Number, default: 0},
    disponible: {type: Boolean, default: true },
    categoria_nombre: {type: String, required: true, validate: validator}

}, {timestamps: true}, {collections: 'Productos'});

module.exports = mongoose.model('Producto', productoSchema);

