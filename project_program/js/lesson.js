//lesson 1////////////////////////////////////////////////////////////////////////////////////////////////////////

// // //regular expressions (выражения)
// //
// // const string = prompt('enter name')
// //
// // const regExp = /n/ig
// //
// // console.log(string.match(regExp))
//
// // const number = '12345671212112'
// //
// // const regExp = /[0-9a-z]/g // \w or \W отрицание
// //
// // //console.log(number.match(regExp))
// // console.log(number.replace(regExp, '*'))
//
//
// //recursion
//
// let num = 0
//
// const counter = () => {
//     num++
//     console.log(num)
//     if (num < 500) {
//         counter()
//     }
// }
//
// counter()
//
////////////////////////////////// PHONE CHECKER /////////////////////////////////////
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = ()=> {
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'not exist'
        phoneResult.style.color = 'red'
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lesson 2////////////////////////////////////////////////////////////////////////////////////////////////////////
// const persons = [
//     {name: 'Jack', age: 17},
//     {name: 'Rosie', age: 44},
//     {name: 'Edvard', age: 19},
//     {name: 'Bella', age: 18},
//     {name: 'Scarlet', age: 30},
//     {name: 'Sponge-bob', age: 75},
//     {name: 'Patrick (Batman)', age: 95}
// ]



////////////////////////////////// TAB SLIDER /////////////////////////////////////
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = ()=> {
    tabContentBlocks.forEach(tabCard => {
        tabCard.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event)=> {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex)=>{
            if(event.target === tab){
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lesson 3////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lesson 4////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lesson 5////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// CONVERTER /////////////////////////////////////
const usd = document.querySelector('#usd')
const som = document.querySelector('#som')
const eur = document.querySelector('#eur')

const converter = (element, targetElementOne, targetElementTwo, current) => {
    element.oninput = async ()=> {
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()

            switch (current) {
                case "som":
                    targetElementOne.value = (element.value / data.usd).toFixed(2)
                    targetElementTwo.value = (element.value / data.eur).toFixed(2)
                    break
                case "usd":
                    targetElementOne.value = (element.value * data.usd).toFixed(2)
                    targetElementTwo.value = (targetElementOne.value / data.eur).toFixed(2)
                    break
                case "eur":
                    targetElementOne.value = (element.value * data.eur).toFixed(2)
                    targetElementTwo.value = (element.value * data.eur / data.usd).toFixed(2)
                    break
                default:
                    break
            }

            element.value === '' && (targetElementOne.value = '')
            element.value === '' && (targetElementTwo.value = '')

        }catch (e) {
            console.log(e)
        }

    }
}

converter(som, usd, eur, "som")
converter(usd, som, eur, "usd")
converter(eur, som, usd, "eur")



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lesson 6////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// CARD SWITCHER /////////////////////////////////////

const card = document.querySelector('.card'),
    btnNext = document.querySelector('#btn-next'),
    btnPrev = document.querySelector('#btn-prev')

let countCard = 1

const fetchToDo = async (count) => {
    const ToDoCardURL = `https://jsonplaceholder.typicode.com/todos/${count}`
    try {
        const response = await fetch(ToDoCardURL)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p style = "color: ${data.completed ? 'green' : 'red'}" >${data.completed}</p>
            <span>${data.id}</span>
        `
    }catch (e) {
        console.log(e.message)
    }
}
fetchToDo(countCard);

btnNext.onclick = () => {
    countCard++
    countCard === 201 && (countCard = 1)
    fetchToDo(countCard)
}
btnPrev.onclick = () => {
    countCard--
    countCard === 0 && (countCard = 200)
    fetchToDo(countCard)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lesson 7////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// WEATHER /////////////////////////////////////
const cityNameInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const BASE_URL = 'http://api.openweathermap.org'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () =>{
    cityNameInput.addEventListener('input', async()=> {
        try {
            const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${cityNameInput.value}&appid=${API_KEY}`)
            const data = await response.json()

            city.innerHTML = data.name || "City don't exist"
            temp.innerHTML = data?. main?. temp ? Math.round(data.main.temp - 273.15) + '&deg' : '...'
        } catch(e) {
            console.dir(e.message)
        }
    })
}

citySearch()


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lesson 8////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// unknown /////////////////////////////////////

