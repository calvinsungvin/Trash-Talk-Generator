const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const generateTrashTalk = require('./generate_trashTalk')


// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
    res.render('index')
  })
  
  app.post('/', (req, res) => {
    const occupation = req.body
    const trashTalk = generateTrashTalk(occupation)
    const occupationString = Object.keys(occupation).join()
    res.render('index', { trashTalk, occupation, occupationString})
  })

  app.use(express.static('public'))

  // starts the express server and listening for connections.
  app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`)
  })