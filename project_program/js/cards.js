const cardsWrapper = document.querySelector('.inner_post-cards')

const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
        const data = await response.json()
        data.forEach((card) => {
            const cardElement = document.createElement('div')
            cardElement.setAttribute('class', 'post-card')
            cardElement.innerHTML = `
                <img class="card_img" src="https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="#">
                <h5>${card.id}</h5>
                <p>${card.title}</p>
                <hr>
                <p class="card_body">${card.body}</p>
            `
            cardsWrapper.appendChild(cardElement)

        })
    }catch (e) {
        console.log(e)
    }
}

fetchPosts()


