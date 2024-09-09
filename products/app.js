const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 3002;


app.get('/', async (req, res) => {

    // Asynchronous method of communication btw microservices
    const userData = await axios.get('http://localhost:3000/users')
    const data = userData.data;

    console.log('users data : ',data);

    res.send('Message from the PRODUCT-SERVICE')
})

app.use(express.json())

app.listen(PORT, () => {
    console.log(`PRODUCT-SERVICE running at http://localhost:${PORT}`)
})