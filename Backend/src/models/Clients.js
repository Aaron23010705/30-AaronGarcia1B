
import { Schema, model  } from "mongoose"; 
/* nombre string
correo string
contrasenia string
telefono string
direccion string
activo boolean
*/

const clientsSchema = new Schema(
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
adress:{
type:String,
require:true,
maxLenght:250
},
active:{
    type:Boolean,
    require:true

} }, 
{
timestamps:true,
strict:true
})

export default model ("Clients", clientsSchema );