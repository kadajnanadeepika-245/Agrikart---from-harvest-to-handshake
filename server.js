require('dotenv').config()
const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
const connectDB = require('./config/db')

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())

// routes
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/listings', require('./routes/listingRoutes'))
app.use('/api/proposals', require('./routes/proposalRoutes'))

const io = new Server(server, { cors: { origin: '*' } })
require('./sockets/chatSocket')(io)

// file uploads & receipts
app.use('/api/uploads', require('./routes/uploadRoutes'))
app.use('/api/receipts', require('./routes/receiptRoutes'))

const PORT = process.env.PORT || 5000

// Attempt to connect to DB but don't crash the server on failure (useful for dev without mongo)
connectDB().then(()=>{
  console.log('DB connected')
}).catch(err=>{
  console.warn('DB connection failed (continuing):', err.message || err)
})

server.listen(PORT, ()=> console.log(`MERN backend running on ${PORT}`))
