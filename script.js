const adviceNumber = document.querySelector('.advice-title')
const adviceContent = document.querySelector('.advice-content')
const btnEl = document.querySelector('.click-btn')


// fetch api
const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        if (response.status !== 200){
            throw new Error('Unable to retrieve data')
        }
        return response.json()
    }).then(result => {
        const data = result.slip
        let adviceId = `Advice #${data.id}`
        let advice = `"${data.advice}"`

        adviceNumber.textContent = adviceId
        adviceContent.textContent = advice
        console.log(data)
    }).catch(err => {
        console.log('rejected:', err)
    })
}

btnEl.addEventListener('click', fetchAdvice)


