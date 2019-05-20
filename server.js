const express = require ('express')
const { join } =require('path')
const app = express()

app.use(express.static(join(__dirname,'public')))
app.use(express.urlencoded( {extended: true}))
app.use(express.json())

require('./app/routing/apiRoutes')
require('./app/routing/htmlRoutes')

app.listen(3000, _ => console.log('Port is listening'))