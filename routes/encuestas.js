const { Router } = require('express')
const router = Router() //Obtener la función Router

const{getEncuesta, postEncuesta, deleteEncuesta, putEncuesta, patchEncuesta} = require('../controllers/encuesta')

router.get('/', getEncuesta)
router.post('/', postEncuesta)
router.put('/', putEncuesta)
router.patch('/', patchEncuesta)
router.delete('/', deleteEncuesta)

//exportar modulo
module.exports = router