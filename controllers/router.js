const { Router } = require('express');
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const router = Router()


router.get('/' , (req, res)=> res.send('hello word'))

router.post('/signup' , async (req, res)=>{ 

 
 const { email, password, role, nombre } = req.body
 const newUser = new User({ email, password, role, nombre })
  await newUser.save() 

const token = jwt.sign({_id: newUser._id, role: newUser.role}, 'secretKey' ) // aca puede ser que el jwt.sign haya que pasarle mas campos
 res.status(200).json({token})

})

router.post('/signin', async (req,res)=>{
const {email, password} = req.body;
const user = await User.findOne({email});
if(!user) return res.status(400).send('No exite usuario');
if(user.password  !== password) return res.status(401).send('Contraseña incorrecta');
const token = jwt.sign({_id: user._id,role: user.role  },'secretKey')
console.log(token)
return res.json(token)

})
// router.get('tareas'){}; 
router.get('public', (req,res)=>{
    res.json([{
        _id:'1' ,
        name:'teste',
        descripcion:'quepaso',
        date:'Hoy es lunes'
    
    }])

});

// router.get('tareas'){}; 
router.get('private', verifyToken, (req,res)=>{
    res.json([{
        _id:'1' ,
        name:'teste',
        descripcion:'quepaso',
        date:'Hoy es lunes'
    
    }])

})
    


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
