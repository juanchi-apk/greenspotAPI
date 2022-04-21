const express = require('express');
const server = express.Router();
const  {authUser} = require('../middleware/auth/authUsers')



const authRouter = require('./auth')
const categoryRouter = require('./strains');
const transactionRouter = require('./transactions')
const userRouter = require('./users');


server.get('/', (req , res)=>{
    res.send("hola mundo")
});
 
server.use('/auth', authRouter)
server.use("/strains", categoryRouter)
server.use("/transactions", authUser,  transactionRouter)
server.use("/user", userRouter)


module.exports = server;