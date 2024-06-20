const adviceID = document.querySelector('.advice-title')
const adviceContent = document.querySelector('.advice-content')
const loadEl = document.querySelector('.loading')
const btnEl = document.querySelector('.click-btn')


// fetch api
const fetchAdvice = () => {
    // show loading indicator before fetching
    adviceContent.textContent = 'Loading...'

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


        setTimeout(() => {
            adviceID.textContent = adviceId
            adviceContent.textContent = advice
        }, 100)
        
        
    
    }).catch(err => {
        console.log('rejected:', err)
    })
}

btnEl.addEventListener('click', fetchAdvice)


