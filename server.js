const  express = require ('express')
const { join } = require('path')
const app = express()

//route to homepage
// app.get('/',(req, res) =>{
//     res.sendFile(join(__dirname + '/public/home.html'))
// })
app.use(express.static)
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.listen(3000)