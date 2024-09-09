const express = require('express')
const app = express()
const PORT = 3001;


app.get('/', (req, res) => {
    res.send('Message from the ORDER-SERVICE')
})

app.listen(PORT, () => {
    console.log(`ORDER-SERVICE running at http://localhost:${PORT}`)
})