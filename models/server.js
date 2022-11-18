const express = require('express')
const cors = require('cors')
const { dbConection } = require("../database/config") 

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.port 
        this.encuestasPath = '/api/encuestas'
        this.conectarDB()
        this.middlewares()
        this.routes() 
    }

    async conectarDB(){
        await dbConection()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes() {//Metodos Rutas de la aplicación
        this.app.use(this.encuestasPath, require('../routes/encuestas'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
}
module.exports = Server