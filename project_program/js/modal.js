////////////////////////////////// MODAL /////////////////////////////////////

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalBtn = document.querySelector('.modal_close')


const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal()

//POST DATA
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const request = new XMLHttpRequest()
    request.open("POST", "server.php")
    request.setRequestHeader('Content-type', 'application/json')

    const  formData = new FormData(form)
    const obj = {}
    formData.forEach((item, index) => {
        obj[index] = item
    })

    const json = JSON.stringify(obj)

    request.send(json)
})
