// Serving static files in Express

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { res.send('Hello world') })

app.use(express.static('public'))



app.listen(port, () => { console.log(`I'm listening on port ${port} 🪼`) })
