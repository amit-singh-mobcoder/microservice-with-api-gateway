const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 3003;

const users = [
    {id: 1, name: 'Amit'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Carla'},
    {id: 4, name: 'James'}
]

app.get('/', (req, res) => {

    return res.status(200).json({
        data: users,
        message: 'users fetched successfully'
    });

    res.send('Message from the USER-SERVICE')
})

app.use(express.json())

app.listen(PORT, () => {
    console.log(`USER-SERVICE running at PORT: http://localhost:${PORT}`)
})