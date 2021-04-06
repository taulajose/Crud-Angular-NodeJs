const emp = require('../models/employee')
const empleadosCtrl={}

empleadosCtrl.getEmpleados = async (req,res)=>{
    const empleados = await emp.find();
    res.json(empleados)
        
    }

empleadosCtrl.getByID= async (req,res)=>{
    const empleado = await emp.findById(req.params.id)
    res.json(empleado)
}

empleadosCtrl.setEmpleados =async (req,res)=>{
   const empleado = new emp({
       name:req.body.name,
       position:req.body.position,
       office:req.body.office,
       salary:req.body.salary
   })
   await empleado.save()
   res.json({
    'status':'empleado guardado'
   })
}

empleadosCtrl.editEmpleado = async (req,res)=>{
    const empleadoNuevo={
        name:req.body.name,
        position:req.body.position
    }
    await emp.findByIdAndUpdate(req.params.id,{
        $set:empleadoNuevo
    },{new:true})
    res.json("empleado actualizado")
      
}

empleadosCtrl.deleteEmpleado = async (req,res)=>{
    const empleado = await emp.findByIdAndRemove(req.params.id)
    res.json("empleado eliminado")
}

module.exports = empleadosCtrl