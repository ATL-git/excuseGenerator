const option = document.querySelector('#escuse')
const result = document.querySelector('#result')

async function optionValid() {
    
    let response = await fetch(`https://excuser-three.vercel.app/v1/excuse/${option.value}/`)
    let data = await response.json()
    result.textContent = data[0].excuse
    
}