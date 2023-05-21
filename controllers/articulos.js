const { Router } = require('express');
const articuloModel = require('../models/articulos')
const router = Router()

// ++++++++++++++++++++++   GET TODO EL ARREGLO ++++++++++++++++++++++++++++++++++++
                 //verifyToken
router.get('/' ,  async (req, res)=>{ 

     const articulo = await articuloModel.find({});
        res.json(articulo);


});

 // ++++++++++++++++++++++   POST NUEVO ARTICULO  ++++++++++++++++++++++++++++++++++++

 router.post('/' ,   async (req, res)=>{ 
  console.log('hola')
     const articulos = new articuloModel({
      
       categoria:req.body.categoria,
      titulo:req.body.titulo,
      subtitulo:req.body.subtitulo,
      vistas:req.body.vistas,
      ini_event:req.body.ini_event,
      nota:req.body.nota,
      link_youtube:req.body.link_youtube,
      imagen:req.body.imagen,
      posicion:req.body.posicion,
      fecha: req.body.fecha,
      fechaMod:req.body.fechaMod,
      aux1:req.body.aux1,
      aux2:req.body.aux2, 
     
     
        

    });
       await articulos.save();
       res.json('Articulo creado!');

});


 // ++++++++++++++++++++++   GET ONEEEE  ++++++++++++++++++++++++++++++++++++
 
router.get('/:_id' , async(req,res) => { 

    try {
        const articulo = await articuloModel.findById(req.params._id)    
        
        res.json(articulo)
    
               
      } catch (err) {
        res.json('ID no encontrado..')
      }

});



 // ++++++++++++++++++++++  MODIFY  ++++++++++++++++++++++++++++++++++++

 router.put('/:_id', async (req,res) => {
    console.log("sasas")
    const { _id } = req.params;
    const articulo = { 
          
      
      categoria:req.body.categoria,
      titulo:req.body.titulo,
      subtitulo:req.body.subtitulo,
      vistas:req.body.vistas,
      ini_event:req.body.ini_event,
      nota:req.body.nota,
      link_youtube:req.body.link_youtube,
      imagen:req.body.imagen,
      posicion:req.body.posicion,
      fecha: req.body.fecha,
      fechaMod:req.body.fechaMod,
      aux1:req.body.aux1,
      aux2:req.body.aux2, 
     
     
             };
    
       await articuloModel.findByIdAndUpdate(_id, {$set: articulo}, {new: true});
       res.json('Articulo modificado!');

});


router.delete('/:_id', async (req,res) => {
  const { _id } = req.params;
    await articuloModel.findByIdAndDelete(_id);
      res.json("Eliminado!");
});





// router.post('/signup' , async (req, res)=>{ 

 
//  const { email, password } = req.body
//  const newUser = new User({ email, password })
//   await newUser.save() 

// const token = jwt.sign({_id: newUser._id}, 'secretKey' )
//  res.status(200).json({token})

// })

// router.post('/signin', async (req,res)=>{
// const {email, password} = req.body;
// const user = await User.findOne({email});
// if(!user) return res.status(400).send('No exite usuario');
// if(user.password  !== password) return res.status(401).send('Contraseña incorrecta');
// const token = jwt.sign({_id: user._id},'secretKey')
// console.log(token)
// return res.json(token)

// })
// router.get('tareas'){}; 


// router.get('public', (req,res)=>{
//     res.json([{
//         _id:'1' ,
//         name:'teste',
//         descripcion:'quepaso',
//         date:'Hoy es lunes'
    
//     }])

// });

// router.get('tareas'){};  ATENCION ACA EJEMPLO DE COMO VALIDAR PEDIR TOKEN EN UN GET , verifyToken,
// router.get('private', verifyToken, (req,res)=>{
//     res.json([{
//         _id:'1' ,
//         name:'teste',
//         descripcion:'quepaso',
//         date:'Hoy es lunes'
    
//     }])

// })
    


module.exports = router


function verifyToken(req, res, next){
    if(!req.headers.authorization) {
    return res.status(401).send('Sin autorizacion')
}
const token = req.headers.authorization.split(' ')[1]
        if (token === "null"){
            return res.status(401).send('Sin autorizacion')
        }

const payload = jwt.verify(token, 'secretKey')
            req.userID = payload._id
            next();

}
