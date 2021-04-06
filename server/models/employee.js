const mongoose = require('mongoose')
const{Schema} = mongoose;

const empleadosSchema = new Schema({
    name:{type:String, required:true},
    position:{type:String,required:true},
    office:{type:String,required:true},
    salary:{type:Number}
})

module.exports = mongoose.model('empleado',empleadosSchema)