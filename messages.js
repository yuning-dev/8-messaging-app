const activeUserId = 1 // axios.get('https://server.com/get-current-user').data.id
const newMessage = document.getElementById('message')

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

function populateMessageList(container, messages) {
    messages.forEach(message => {
        const messageDiv = createMessageDiv(message)
        container.appendChild(messageDiv)
    })
}

function appendToMessageList(container, message) {
    const newMessage = {
        message: message,
        timestamp: new Date().getTime(),
        userId: activeUserId,
    }
    const messageDiv = createMessageDiv(newMessage)
    container.appendChild(messageDiv)
}

newMessage.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        appendToMessageList(messageList, e.target.value)
        e.target.value = ""
    }
})

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

populateMessageList(messageList, moreMessages)

// createMessageDiv({ message: 'Hey gurrrrrl', userId: 10, timestamp: 111111111 })