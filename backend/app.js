const express = require('express')
const app = express()

const PORT = 4000

app.use('/', (req, res) => res.send({ message: 'App ready' }))

app.listen(PORT, () => console.log(`App listen on port: ${PORT}`))