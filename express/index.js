const express = require('express')
const cors = require('cors')

const app = express()
const breeds = require('./data.js')
const port = 4000

app.use(cors())

app.get('/breeds', (req, res) => {
  const skip = req.query.skip;

  
  res.json(breeds.slice(skip, skip + 5))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
