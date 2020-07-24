const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const generateTrashTalk = require('./generate_trashTalk')
//自訂helpers
const Handlebars = require("handlebars")
Handlebars.registerHelper('same', function(a, b){
  return (a === b) ? "checked": ""
})

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
    console.log(req.body.job)
    // console.log(generateTrashTalk(req.body.job))
    res.render('index', { trashTalk: generateTrashTalk(req.body.job) , radioChecked: req.body.job})
  })

  app.use(express.static('public'))

  // starts the express server and listening for connections.
  app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`)
  })