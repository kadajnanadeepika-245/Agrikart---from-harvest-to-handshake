module.exports = function(io){
  io.on('connection', socket=>{
    console.log('socket connected', socket.id)
    socket.on('join', room=> socket.join(room))
    socket.on('message', data=>{
      // broadcast to room
      if(data.room) io.to(data.room).emit('message', data)
      else io.emit('message', data)
    })
    socket.on('disconnect', ()=> console.log('disconnected', socket.id))
  })
}
