const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.post('/register', async (req,res)=>{
  const {name,email,password,role} = req.body
  const hashed = await bcrypt.hash(password, 10)
  try{
    const user = await User.create({name,email,password:hashed,role})
    res.json({id:user._id, email:user.email})
  }catch(err){res.status(400).json({error:err.message})}
})

router.post('/login', async (req,res)=>{
  const {email,password} = req.body
  const user = await User.findOne({email})
  if(!user) return res.status(401).json({message:'Invalid credentials'})
  const ok = await bcrypt.compare(password, user.password)
  if(!ok) return res.status(401).json({message:'Invalid credentials'})
  const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET || 'secret', {expiresIn:'1h'})
  res.json({accessToken: token})
})

module.exports = router
