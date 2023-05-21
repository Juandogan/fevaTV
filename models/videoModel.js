const { Schema, model } = require('mongoose');

const videosSchema = new Schema({
    titulo:String,
    descripcion:String,
    duracion: String,
    imagen: String,
    type:String,
    link:String,
    vistas:Number

    


},
{timestamps: true}
)


module.exports =  model('Videos', videosSchema)