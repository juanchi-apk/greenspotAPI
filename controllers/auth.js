const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const {validationResult } = require('express-validator')
const sequelize = require('../database/index');


const {Users} =sequelize;


exports.signup = async (req, res) => {
    //console.log(req.body)

   /*  const errors = validationResult(req);

    if (!errors.isEmpty()){

        
        return res.status(400).json({ errors: errors.array() });
    }
    */
    const  {fullName, email, dateOfBirth, password, confirmPassword} = req.body
    
    if (password != confirmPassword){
        return res.status(400).json({
            status: "FAILED",
            message:"Passwords don't match",
            data: "passwords don't match"            
        
    })
    }  
    

    const user = await Users.findOne({ where: { email: email } })

    if (user) {
        return res.status(200).json({
            status: "FAILED",
            message:"Email already exist, try to Login",
            data: "Already an User"
            
    })
    }
    const encriptedpw = await  bcrypt.hash(password, 10);
    try {
        const user = await Users.create({
            full_name: fullName,	
            date_of_birth: dateOfBirth,
            email:email,
            password: encriptedpw,
        })
        const token =  jwt.sign(
            {
                email : user.email,
                id: user.user_id
            }, process.env.SESSION_SECRET, {expiresIn: "1h"})
        
        return res.status(200).json({
            status: "SUCCESS",
            message: "User created, welcome to your Green Spot!",
            data: {
                result: user,
                token:token
            }
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:"FAILED",
            message: 'No se pudo crear el usuario',
            data: error
        })
    }
    
    
}

exports.signin = async (req, res) =>{
    //console.log(req.body)

/*     const errors = validationResult(req);
    //console.log(errors)
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
 */    const {email, password} = req.body

    const user = await Users.findOne({ where: { email: email } })
    if(!user || user==null){
        return res.status(200).json({
            status: "FAILED",
            message:"User doesn't exist",
            data: "Not a user"
            
    }) 
    } 

    
   const passwordConfirmation = await bcrypt.compare(password, user.password)
    
   if(!passwordConfirmation){
    return res.status(200).json({
            status: 'FAILED',
            message: "Passwords don't match",
            data : "passwords don't match",
            
        })
    }

    const token = jwt.sign(
        {
            email : user.email,
            id: user.user_id
        }, process.env.SESSION_SECRET, {expiresIn: "1h"})

    return res.status(200).json({ 
        status: "SUCCESS",
        message: "Succesfull Login",
        data: {
            result: user,
            token:token
        }
       })
}   

exports.signwith = async (req, res) =>{
  
    const {fullName, email, password} = req.body;
    console.log(req.body)
    const user = await Users.findOne({ where: { email: email } })

    if (user) {
       return res.status(400).json({ isUser : "true"})
    }

    else{
        
        await Users.create({
            full_name:fullName,		
            email:email,
            password: password,
        })
        .then(function (user) {
           return  res.status(200).json({
                message: 'El usuario se creo correctamente',
                data: {
                    isUser:"true",
                }
            })
        }).catch(function(error){
            return res.status(400).json ({error: error})
        })


    }


}
