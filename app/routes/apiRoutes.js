const friends = require('../data/friends.js')

module.exports = (app) => {
    // display all possible friends
    app.get('/friends', (req, res) => {
        res.json(friends)
    })
}