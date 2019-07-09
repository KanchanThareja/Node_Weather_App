console.log('here js in public')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')

msg1.textContent = 'Loading...'
msg2.textContent = ''


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error
            } else {
                msg2.textContent = data.location 
                msg1.textContent = data.forecast
            }
        })
    })

})