const express = require('express')
const router = express.Router()
const Listing = require('../models/Listing')
const auth = require('../middlewares/authMiddleware')

router.get('/', async (req,res)=>{
  const list = await Listing.find().sort({createdAt:-1}).limit(50)
  res.json(list)
})

router.post('/', auth, async (req,res)=>{
  try{ const l = await Listing.create({...req.body, farmer: req.user.id}); res.json(l)}catch(e){res.status(400).json({error:e.message})}
})

module.exports = router
