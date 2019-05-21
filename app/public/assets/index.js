// const { fetch, alert } = window

// const getSurvey = _ => {
//   fetch('/question')
//     .then(r => r.json())
//     .then(survey => {
//         document.querySelector('#survey').innerHTML = ''
//         survey.forEach(({ Question }) => {
//         let surveyDiv = document.createElement('div')
        
        
//         surveyDiv.innerHTML = `
//           <h3>${Question}</h3>
//           <select name="qOne" id="qOne" required>
//                         <option value></option>
//                         <option value="5" type="number">5 (Strongly Agree)</option>
//                         <option value="4" type="number">4</option>
//                         <option value="3" type="number">3</option>
//                         <option value="2" type="number">2</option>
//                         <option value="1" type="number">1 (Strongly Disagree)</option>
//                     </select>
//         `
       
//         document.querySelector('#survey').append(surveyDiv)
        
//       })
//     })
//     .catch(e => console.error(e))
// }

// getSurvey()

document.querySelector('.submitBtn').addEventlistener(
    'click', e =>{
        console.log('submitted')
    }
)