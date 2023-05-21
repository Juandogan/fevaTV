
const { Schema, model } = require('mongoose');


const anunciantesSchema = new Schema({
     
 categoria:{type: String, required : false},
 imagen1:{type: String, required : false},
 imagen2:{type: String, required : false},
 imagen3:{type: String, required : false},
 imagen4:{type: String, required : false},
 imagen5:{type: String, required : false},
 imagen6:{type: String, required : false},
 imagen7:{type: String, required : false},
 imagen8:{type: String, required : false},
 imagen9:{type: String, required : false},
 imagen10:{type: String, required : false}, 
 link1:{type: String, required : false},
 link2:{type: String, required : false},
 link3:{type: String, required : false},
 link4:{type: String, required : false},
 link5:{type: String, required : false},
 link6:{type: String, required : false},
 link7:{type: String, required : false},
 link8:{type: String, required : false},
 link9:{type: String, required : false},
 link10:{type: String, required : false},

contador1:{type: Number, required : false},
contador2:{type: Number, required : false},
 contador3:{type: Number, required : false},
 contador4:{type: Number, required : false},
 contador5:{type: Number, required : false},
 contador6:{type: Number, required : false},
 contador7:{type: Number, required : false},
 contador8:{type: Number, required : false},
 contador9:{type: Number, required : false},
 contador10:{type: Number, required : false},


 fecha :{type: String, required : false},
 fechaMod:{type: String, required : false},
 vistas:{type: String, required : false},

})


module.exports =  model('anunciantesSchema', anunciantesSchema)


