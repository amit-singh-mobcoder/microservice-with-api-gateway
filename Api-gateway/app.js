const express = require('express')
const proxy = require('express-http-proxy')
const cors = require('cors')
const PORT = 3000;
const app = express();


app.use(cors())

app.use('/orders', proxy('http://localhost:3001'))
app.use('/products', proxy('http://localhost:3002'))
app.use('/users', proxy('http://localhost:3003'))

app.listen(PORT, () => {
    console.log(`Api-Gateway is running at http://localhost:${PORT}`)
})