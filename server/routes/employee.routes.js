const express = require('express')
const router = express.Router();
const emplctrl = require('../controllers/empleados.controller')

router.get('/', emplctrl.getEmpleados)
router.post('/',emplctrl.setEmpleados)
router.get('/:id',emplctrl.getByID)
router.put('/:id', emplctrl.editEmpleado)
router.delete('/:id', emplctrl.deleteEmpleado)

module.exports=router