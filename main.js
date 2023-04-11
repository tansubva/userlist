const createElem = ({ tag = 'div', text, className }) => { 
    const element = document.createElement(tag) 
    if (text) element.textContent = text 
    if (className) element.className = className 
    return element 
} 
 
const container = createElem({ tag: 'div', className: 'container' }) 
document.body.prepend(container) 
 
const leftPart = createElem({ tag: 'div', className: 'left' }) 
container.prepend(leftPart) 
const rightPart = createElem({ tag: 'div', className: 'right' }) 
container.prepend(rightPart) 
const topPart = createElem({ tag: 'div', className: 'top' }) 
leftPart.prepend(topPart) 
const botPart = createElem({ tag: 'div', className: 'bot' }) 
leftPart.prepend(botPart) 
 
const loader = createElem({ tag: 'div', text: 'Загрузка приложения...', className: 'loader' }) 
document.body.prepend(loader) 
const errorMain = createElem({ tag: 'div', text: 'Произошла ошибка при попытке загрузить пользователей', className: 'error-main' }) 
 
const listMain = createElem({ tag: 'ul', className: 'list' }) 
rightPart.prepend(listMain) 
 
const getUsers = async () => { 
    try { 
        const textMain = createElem({ tag: 'div', text: 'Список дел для', className: 'text-main' }) 
        topPart.prepend(textMain) 
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/`) 
        const usersData = await res.json() 
        usersData.forEach((user) => { 
            loader.remove() 
            const userLi = createElem({ tag: 'button', text: user.name, className: 'user-id' }) 
            listMain.prepend(userLi) 
            userLi.addEventListener('click', () => { 
                getToDos(user, botPart) 
            }) 
        }); 
    } catch { 
        document.body.prepend(errorMain) 
        loader.remove() 
    } 
} 
getUsers() 
 
const getToDos = async (user, botPart) => { 
    try { 
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`) 
        console.log(response.url) 
        const dos = await response.json() 
        // Remove existing elements from botPart before appending new ones
        botPart.innerHTML = ''
        dos.forEach((toDos)
        )}
     catch {

    }}





















