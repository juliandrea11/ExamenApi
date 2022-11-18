const mongoose = require('mongoose')

const dbConection = async () => {
    try {
        mongoose.connect(process.env.MONGODB_CNN, {})
        console.log('Estableciendo conexión con el servidor')
    } catch (error) {
        console.log('Conexión no establecida')
    }
}

module.exports = {
    dbConection 
}