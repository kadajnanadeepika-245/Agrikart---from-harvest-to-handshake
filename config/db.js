const mongoose = require('mongoose')

const connectDB = async ()=>{
  const uri = process.env.MONGO_URI || 'mongodb://mongo:27017/agrikart'
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log('MongoDB connected')
}

module.exports = connectDB
