const adviceID = document.querySelector('.advice-title')
const adviceContent = document.querySelector('.advice-content')
const errorEl = document.querySelector('.error-message')
const btnEl = document.querySelector('.click-btn')


// fetch api
const fetchAdvice = () => {
    // show loading indicator before fetching
    adviceContent.textContent = 'Loading...'

    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        if (response.status !== 200){
            throw new Error(displayErrorMsg('Unable to retrieve data'))
        }
        return response.json()
    }).then(result => {
        const data = result.slip
        let adviceId = `Advice #${data.id}`
        let advice = `"${data.advice}"`

        adviceID.textContent = adviceId
        adviceContent.textContent = advice

        // clear error message if successful
        clearErrorMsg()
      
    }).catch(err => {
        console.log('rejected:', err)
        displayErrorMsg(err.message)
    })
}

btnEl.addEventListener('click', fetchAdvice)


const displayErrorMsg = (message)=>{
    errorEl.textContent = message
    errorEl.classList.remove('hidden')
}

const clearErrorMsg = () => {
    errorEl.textContent = ''
    errorEl.classList.add('hidden')
}