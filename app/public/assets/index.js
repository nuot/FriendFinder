console.log('ping')
const { fetch, alert } = window

// get all friends
// const getFriends = _ =>{
// fetch('/friends')
//     .then(r => r.json())
//     .then(friends =>{
//         friends.forEach(({scores}) =>{

//         })
//     })
//     .catch(e => console.error(e))
// }

// get all questions
const getSurvey = _ => {
fetch('/questions')
    .then(r => r.json())
    .then(questions => {
        document.querySelector('#survey').innerHTML = ''
        questions.forEach(({Question}, index) =>{
        let questionDiv = document.createElement('div')
        questionDiv.innerHTML = 
        `
        <h3>Question ${index +1 }</h4>
        <p>${Question}</p>
        <select class='surveyOption'>
            <option selected>Select Answer</option>
            <option value="1">1 (Strongly Disagree)</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 (Strongly Agree)</option>
        </select>`
        document.querySelector('#survey').append(questionDiv)
        })
    })
    .catch(e => console.error(e))
}
getSurvey()

getAnswers = _ =>{

}
// submit button
// document.querySelector('#submitB').addEventListener('click', e => {
//     e.preventDefault()
//     fetch('/friends', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: document.querySelector('#name').value,
//             photo: document.querySelector('#url').value,
//             email: document.querySelector('#email').value,
//             scores:
//         })
//     })
//         .then(r => r.json())
//         .then( r => {
//             console.log(r)
//         })
//         .catch(e => console.error(e))
//     })
