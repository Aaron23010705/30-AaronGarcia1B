
import { Schema, model  } from "mongoose"; 
/* titulo string
descripcion string
director string
genero array
anio number
duracion number
imagen string (URL)
*/

const filmSchema = new Schema(
    { title: {
type:String,
 require:true,
 maxLength:100
},
description:{
    type:String,
    require:true,
    maxLenght:100
},
filmDirector: {
    type:String,
    require:true,
    maxLenght:100
},

gender:{
type:String,
require:true,
enum :{
    values: ["Femenino", "Masculino"],
    message:"El género solo puede ser femenino o masculino"
}
},
year:{
    type:Number,
     require:true,
},

duration:{
type:Number,
require:true,
},
image:{
type:String,
require:true,
}
}, 
{
timestamps:true,
strict:true
})

export default model ("Films", filmSchema );