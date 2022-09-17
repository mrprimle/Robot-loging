const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

app.use(require('body-parser').urlencoded({ extended: false }))

app.post('/api', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
