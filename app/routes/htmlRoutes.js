const path = require('path')
module.exports = app => {

// display the homepage
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/../public/home.html'))
})


// display the survey page
app.get('/survey', (req, res)=>{
    res.sendFile(path.join(__dirname + '/../public/survey.html'))
})
}