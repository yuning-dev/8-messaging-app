const activeUserId = 1 // axios.get('https://server.com/get-current-user').data.id

function createMessageDiv(message) {
    const div = document.createElement('div')
    div.classList.add('message')
    
    if (message.userId === activeUserId) {
        div.classList.add('activeUserMessage')
    } else {
        div.classList.add('otherUserMessage')
    }

    const prettyDate = new Date(message.timestamp)

    div.textContent = message.message + ' - ' + prettyDate.toDateString()
    return div
}

function createMessageList(container, messages) {
    messages.forEach(message => {
        const messageDiv = createMessageDiv(message)
        container.appendChild(messageDiv)
    })
}

const messageList = document.getElementById('messageList')
const messages = [
    {
        message: 'Happy days!',
        timestamp: new Date().getTime() - 1000,
        userId: 1,
    },
    {
        message: 'Banter banter banter',
        timestamp: new Date().getTime(),
        userId: 2,
    }
]

const moreMessages = [...messages, ...messages, ...messages]

createMessageList(messageList, moreMessages)

// createMessageDiv({ message: 'Hey gurrrrrl', userId: 10, timestamp: 111111111 })