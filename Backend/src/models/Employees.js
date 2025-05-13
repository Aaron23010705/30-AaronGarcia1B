
import { Schema, model  } from "mongoose"; 
/* nombre string
correo string
contrasenia string
telefono string
direccion string
puesto string
fecha_contratacion date,
salario number,
activo boolean
*/

const employeeSchema = new Schema(
    { name: {
type:String,
 require:true,
 maxLength:100
},
email:{
    type:String,
    require:true,
    maxLenght:100
},
password: {
    type:String,
    require:true,
    maxLenght:100
},

telephone:{
type:String,
require:true,
maxLenght:10
},
address:{
    type:String,
     require:true,
     maxLenght:100
},

position:{
type:String,
require:true,
maxLenght:20
},
hire_date:{
type:Date,
require:true
},
salary:{
    type:Number,
    require:true
    },
active:{
    type:Boolean,
    require:true

} }, 
{
timestamps:true,
strict:true
})

export default model ("Employee", employeeSchema );