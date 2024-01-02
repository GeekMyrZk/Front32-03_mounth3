//////////////////////// HOMEWORK 1  (PART 1) - MAIL CHECKER ////////////////////////
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[\w-.]+@gmail\.com$/
//почты которые пройдут проверку
// my.email@gmail.com
// user123_@gmail.com
// some.email-with-dash@gmail.com

gmailButton.onclick = ()=> {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'not exist'
        gmailResult.style.color = 'red'
    }
}

//////////////////////// HOMEWORK 1  (PART 2) - MOVE BLOCK ////////////////////////
// const childBlock = document.querySelector('.child_block')
// let moveDistance = document.querySelector('.parent_block').offsetWidth - 51
//
// let childBlockPositionX = 0
//
// const moveBlock = () => {
//
//     childBlockPositionX++
//     if (childBlockPositionX < moveDistance){
//
//         childBlock.style.left = `${childBlockPositionX}px`
//         setTimeout(moveBlock, 1)
//     }
//     if (childBlockPositionX >= moveDistance) {
//         const backward = ()=> {
//             childBlockPositionX--
//             childBlock.style.left = `${childBlockPositionX}px`
//             setTimeout(backward, 1)
//             if (childBlockPositionX === 0) {
//                 moveBlock()
//             }
//         }
//         backward()
//     }
// }
//
// moveBlock()

//////////////////////// HOMEWORK 2  (PART 1) - MOVE BLOCK IN A SQUARE ////////////////////////
const childBlock = document.querySelector('.child_block')
const childBlockLength = childBlock.offsetWidth + 1
const moveDistance = document.querySelector('.parent_block').offsetWidth - childBlockLength

const moveSpeed = 1
let childBlockPositionX = 0
let childBlockPositionY = 0

const moveBlock = () => {
    if (childBlockPositionX < moveDistance && childBlockPositionY === 0){
        childBlockPositionX++
        childBlock.style.left = `${childBlockPositionX}px`
        setTimeout(moveBlock, moveSpeed)
    }else if (childBlockPositionX >= moveDistance && childBlockPositionY < moveDistance){
        childBlockPositionY++
        childBlock.style.top = `${childBlockPositionY}px`
        setTimeout(moveBlock, moveSpeed)
    }
    else if (childBlockPositionX > 0 && childBlockPositionY === moveDistance){
        childBlockPositionX--
        childBlock.style.left = `${childBlockPositionX}px`
        setTimeout(moveBlock, moveSpeed)
    }
    else if (childBlockPositionX === 0 && childBlockPositionY > 0){
        childBlockPositionY--
        childBlock.style.top = `${childBlockPositionY}px`
        setTimeout(moveBlock, moveSpeed)
    }
}

moveBlock()

//////////////////////// HOMEWORK 2  (PART 2) - STOPWATCH ////////////////////////

let scoreBoard = document.querySelector('.interval')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let seconds = 0
let myInterval

const countTime = () => {
    myInterval = setInterval(() => {
        seconds++
        scoreBoard.innerHTML = seconds.toString()
    }, 1000)
}

startBtn.onclick = () => {
    clearInterval(myInterval)
    countTime()
    startBtn.innerText = 'Start'
}

stopBtn.onclick = ()=> {
    clearInterval(myInterval)
    seconds === 0 ? startBtn.innerText = 'Start' : startBtn.innerText = 'Continue'
}

resetBtn.onclick = ()=> {
    scoreBoard.innerHTML = '0'
    seconds = 0
    clearInterval(myInterval)
}
