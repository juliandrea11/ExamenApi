const {Schema, model}= require('mongoose')

const EncuestaSchema = Schema({
    nombreEncuesta: {
        type: String
    },
    fecha: {
        type: String
    },
    documentoEncuestado: {
        type: String
    },
    nombreEncuestado: {
        type: String
    },
    edad: {
        type: Number
    },
    genero: {
        type: String
    },
    empleado: {
        type: Boolean
    }

})
module.exports = model('encuesta', EncuestaSchema)