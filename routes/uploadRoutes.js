const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const router = express.Router()

const UPLOAD_DIR = path.join(__dirname, '..', 'uploads')
if(!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true })

const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, UPLOAD_DIR) },
  filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname) }
})

const upload = multer({ storage })

router.post('/', upload.array('files', 6), async (req,res)=>{
  // In production, you'd forward to Cloudinary / S3 and return signed urls
  const files = req.files.map(f=> ({filename: f.filename, path: `/uploads/${f.filename}`}))
  res.json({files})
})

module.exports = router
