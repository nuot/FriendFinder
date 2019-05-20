const { join } = require('path')

module.exports = (app) => {
    // display the survey page
    app.get('/survey', (req, res) => {
        res.sendFile(join(__dirname, '../public/survey.html'))
    })

    // display the home page
    app.get('/home', (req, res) => {
        res.sendFile(join(__dirname, '../public/home.html'))
    })
}