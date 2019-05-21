
// require('./app/routing/apiRoutes')
// require('./app/routing/htmlRoutes')

// app.get('/', (req, res)=>{
//     res.sendFile(join(__dirname, 'app/public/home.html'))})

// app.get('/survey', (req, res)=>{
//     res.sendFile(join(__dirname, 'app/public/survey.html'))})


const express = require ('express')
const app = express()
const { join } = require('path')

app.use(express.static(join(__dirname,'/public')))
app.use(express.urlencoded( {extended: true}))
app.use(express.json())

require('./app/routes/htmlRoutes.js')(app)
require('./app/routes/apiRoutes.js')(app)



app.listen(3000)