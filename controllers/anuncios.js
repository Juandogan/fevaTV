const { Router } = require('express');
const anunciosModel = require('../models/anunciantes')
const router = Router()

// ++++++++++++++++++++++   GET TODO EL ARREGLO ++++++++++++++++++++++++++++++++++++
                 //verifyToken
router.get('/' ,  async (req, res)=>{ 

     const anuncios = await anunciosModel.find({});
        res.json(anuncios);


});

 // ++++++++++++++++++++++   POST NUEVO ARTICULO  ++++++++++++++++++++++++++++++++++++

 router.post('/' ,   async (req, res)=>{ 
  console.log('hola')
     const anuncios = new anunciosModel({
      
      categoria:req.body.categoria,
      imagen1:req.body.imagen1,
      imagen2:req.body.imagen2,
      imagen3:req.body.imagen3,
      imagen4:req.body.imagen4,
      imagen5:req.body.imagen5,
      imagen6:req.body.imagen6,
      imagen7:req.body.imagen7,
      imagen8:req.body.imagen8,
      imagen9:req.body.imagen9,
      imagen10:req.body.imagen10,
      link1:req.body.link1,
      link2:req.body.link2,
      link3:req.body.link3,
      link4:req.body.link4,
      link5:req.body.link5,
      link6:req.body.link6,
      link7:req.body.link7,
      link8:req.body.link8,
      link9:req.body.link9,
      link10:req.body.link10,
      vistas:req.body.vistas,
      fecha: req.body.fecha,
      fechaMod:req.body.fechaMod,
     
            

    });
       await anuncios.save();
       res.json('Articulo creado!');

});


 // ++++++++++++++++++++++   GET ONEEEE  ++++++++++++++++++++++++++++++++++++
 
router.get('/:_id' , async(req,res) => { 

    try {
        const anuncios = await anunciosModel.findById(req.params._id)    
        
        res.json(anuncios)
    
               
      } catch (err) {
        res.json('ID no encontrado..')
      }

});



 // ++++++++++++++++++++++  MODIFY  ++++++++++++++++++++++++++++++++++++

 router.put('/:_id', async (req,res) => {
    console.log("sasas")
    const { _id } = req.params;
    const anuncios = { 
          
      
      categoria:req.body.categoria,
      imagen1:req.body.imagen1,
      imagen2:req.body.imagen2,
      imagen3:req.body.imagen3,
      imagen4:req.body.imagen4,
      imagen5:req.body.imagen5,
      imagen6:req.body.imagen6,
      imagen7:req.body.imagen7,
      imagen8:req.body.imagen8,
      imagen9:req.body.imagen9,
      imagen10:req.body.imagen10,
      link1:req.body.link1,
      link2:req.body.link2,
      link3:req.body.link3,
      link4:req.body.link4,
      link5:req.body.link5,
      link6:req.body.link6,
      link7:req.body.link7,
      link8:req.body.link8,
      link9:req.body.link9,
      link10:req.body.link10,
      vistas:req.body.vistas,
      fecha: req.body.fecha,
      fechaMod:req.body.fechaMod,
     
     
             };
    
       await anunciosModel.findByIdAndUpdate(_id, {$set: anuncios}, {new: true});
       res.json('Anuncio modificado!');

});


router.delete('/:_id', async (req,res) => {
  const { _id } = req.params;
    await anunciosModel.findByIdAndDelete(_id);
      res.json("anuncios eliminado!");
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
