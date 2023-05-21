

//ARCHIVO DE CONEXION A MONGODB


const mongoose =require('mongoose'); //Exportamos modulo debe ser bajado 
//guardo la conexcion este link lo proporciona mongodb
const URI = 'mongodb+srv://fevasistemas:fevasistemas.12@cluster0.5jm6mcy.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(URI, { useNewUrlParser:true,  useUnifiedTopology: true})
.then(db=> console.log('BASE CONECTADA'))
.catch(err => console.log(err));


module.exports = mongoose;
