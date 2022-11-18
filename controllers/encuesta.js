const Encuesta = require('../models/encuesta')

const getEncuesta = async(req, res) => {
    const encuesta1= await Encuesta.find()

    res.json ({
        msg: 'GET API',
        encuesta1
    })

}
 
const postEncuesta = async(req, res) => {
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body

    const encuesta1 = new Encuesta({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado })
    await encuesta1.save()  

    res.json({
        msg: 'POST API',
        encuesta1
    })
}

//PUT
const putEncuesta = async (req, res) => {
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body
    const encuesta1 = await Encuesta.findOneAndUpdate({documentoEncuestado:documentoEncuestado},{nombreEncuesta:nombreEncuesta, fecha:fecha, nombreEncuestado:nombreEncuestado, edad: edad, genero:genero, empleado:empleado})

    res.json({
        msg: 'PUT API',
        encuesta1
    })
}

//PATCH:Modificación parcial
const patchEncuesta = async (req, res) => {
    const {nombreEncuesta, documentoEncuestado } = req.body
    const encuesta1 = await Encuesta.findOneAndUpdate({documentoEncuestado: documentoEncuestado},{nombreEncuesta:nombreEncuesta})

    res.json({
        msg: 'PATCH API',
        encuesta1
    })
}

//DELETE
const deleteEncuesta = async(req, res) => {
    const { documentoEncuestado } = req.query
    const encuesta1 = await Encuesta.findOneAndDelete({documentoEncuestado:documentoEncuestado})

    res.json({
        msg: 'DELETE API',
        encuesta1
    })
}


module.exports = {
    getEncuesta,
    postEncuesta,
    putEncuesta,
    patchEncuesta,
    deleteEncuesta
}