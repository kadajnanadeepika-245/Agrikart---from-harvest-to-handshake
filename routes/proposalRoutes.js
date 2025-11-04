const express = require('express')
const router = express.Router()
const Proposal = require('../models/Proposal')
const auth = require('../middlewares/authMiddleware')

router.post('/', auth, async (req,res)=>{
  try{ const p = await Proposal.create({...req.body, buyer: req.user.id}); res.json(p)}catch(e){res.status(400).json({error:e.message})}
})

router.get('/', auth, async (req,res)=>{
  const ps = await Proposal.find().sort({createdAt:-1}).limit(100)
  res.json(ps)
})

module.exports = router
