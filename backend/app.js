const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
  cors: {
    origin: '*'
  }
})

const PORT = 4000

let users = []
const room = '1234'

io.on("connection", socket => {
  const { id } = socket
  console.log(`Connected ` + id)
  socket.emit('connection', id)

  socket.join(room)

  socket.on('disconnect', () => {
    console.log('User ' + id + ' disconnected')
    // if (users.length === 0) return
    const currentUser = users.find(user => user.id === id)
    if (!currentUser) return

    users = users.filter(user => user.id !== id)

    io.to(room).emit('userLeave', {users})
    io.to(room).emit('newMessage', {
      text: `Пользователь ${currentUser.name} ${currentUser.lastName} сделал больно и покинул чат!`,
      isRobot: true}
    )
    console.log("Disconnect")
    console.log(users)
  })

  socket.on('newMessage', data => {
    io.emit('newMessage', {...data, id})
  })

  socket.on('newUser', (user, callback) => {
    user.id = id
    users.push(user)
    console.log(users)
    io.emit('newUser', { users })
    callback({user, users})
  })

  socket.on('userLeave', (user, callback) => {
    users = users.filter(u => u.id !== user.id)
    io.emit('userLeave', {users})
    callback(users)
  })
})

http.listen(PORT, () => console.log(`App listen on port: ${PORT}`))
