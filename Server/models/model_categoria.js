var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var categoriaSchema = new Schema({

    nombre: { type: String ,required: [true, ' El nombre es necesario '] },
    clasificacion: { type: Number, required: [true, ' campo requerido ']  }

}, {timestamps: true} , {collection: 'Categorias'});


module.exports = mongoose.model('Categoria', categoriaSchema );