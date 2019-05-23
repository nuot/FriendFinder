const { fetch, alert } = window

document.querySelector('#submitB').addEventListener('click', e => {
    e.preventDefault()
    fetch('/friends', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('#name').value,
            photo: document.querySelector('#url').value,
            email: document.querySelector('#email').value,
            scores:  [
            document.querySelector('#q1').value,
            document.querySelector('#q2').value,
            document.querySelector('#q3').value,
            document.querySelector('#q4').value,
            document.querySelector('#q5').value,
            document.querySelector('#q6').value,
            document.querySelector('#q7').value,
            document.querySelector('#q8').value,
            document.querySelector('#q9').value,
            document.querySelector('#q10').value
        ]
        })
    })
        .then(r => r.json())
        .then( r => {
            console.log(r)
        })
        .catch(e => console.error(e))
    })
