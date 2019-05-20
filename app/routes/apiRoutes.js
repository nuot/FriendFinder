const friends = require('../data/friends.js')
const questions = require('../data/questions.js')

module.exports = (app) => {
    // display all possible friends
    app.get('/friends', (req, res) => {
        res.json(friends)
    })

    // display all survey questions
    app.get('/questions', (req, res) =>{
        res.json(questions)
    })
}
    // This will be used to handle incoming survey results.
    //  This route will also be used to handle the compatibility logic.
    
