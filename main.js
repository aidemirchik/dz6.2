const ROOT = document.getElementById('root')

const btn = document.createElement('button')
ROOT.append(btn)
btn.textContent = 'ModalWindow?'
btn.style.cssText = `
background-color: white;
color: black;
font-size: 1rem;
margin: 0 auto;
display: block;
padding: 8px 10px;
border-radius: 50px;
border: none;
width: 200px;
height: 45px;
cursor: pointer;
`
btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'aqua'
})
btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'white'
})

const modal = document.createElement('div')
modal.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000060;
display: flex;
justify-content: center;
align-items: center;
`

const modalWindow = document.createElement('div')
modalWindow.style.cssText = `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 900px;
height: 250px;
background-color: rgb(170, 201, 220);
padding: 20px;
font-size: 1.5rem;
`

modalWindow.textContent = ''
const qweTitle = document.createElement('h2')
qweTitle.textContent = 'Что такое "Модальное окно".                                         Что из себя представляет?'
modalWindow.append(qweTitle)
qweTitle.style.cssText = `
color: rgb(25, 25, 25);
text-align: center;
line-height: normal;
white-space: normal;
`
modal.append(modalWindow)
btn.addEventListener('click', () => {
    console.log('clicked');
    ROOT.append(modal)
})

const closeModal = document.createElement('button')
closeModal.textContent = 'x'
modalWindow.append(closeModal)
closeModal.style.cssText = `
position: absolute;
top: 0;
right: 0;
border: none;
width: 30px;
height: 30px;
background-color: rgb(27, 192, 90);
`
closeModal.addEventListener('click', () => {
    modal.remove()
})

modal.addEventListener('click', (event) => {
    if(event.target !== modalWindow)
    modal.remove()
})

//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

const ROOR = document.getElementById('roor')

const btnT = document.createElement('button')
ROOR.append(btnT)
btnT.textContent = 'ModalWindow.'
btnT.style.cssText = `
background-color: white;
color: black;
font-size: 1rem;
margin: 0 auto;
display: block;
padding: 8px 10px;
border-radius: 50px;
border: none;
width: 200px;
height: 45px;
cursor: pointer;
`
btnT.addEventListener('mouseover', () => {
    btnT.style.backgroundColor = 'gold'
})
btnT.addEventListener('mouseout', () => {
    btnT.style.backgroundColor = 'white'
})

const modalT = document.createElement('div')
modalT.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000060;
display: flex;
justify-content: center;
align-items: center;
`

const modalWindowT = document.createElement('div')
modalWindowT.style.cssText = `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 900px;
height: 250px;
background-color: rgb(170, 201, 220);
padding: 20px;
font-size: 1.5rem;
`

modalWindowT.textContent = ''
const qweTitleT = document.createElement('p')
qweTitleT.textContent = 'Модальное окно – это элемент интерфейса, которой визуально представляет собой «всплывающее окно», отображающееся над остальной частью страницы. При этом показ окна обычно сопровождают затемнением всей другой части страницы.'
modalWindowT.append(qweTitleT)
qweTitleT.style.cssText = `
text-align: center;
text-align: center;
color: black;
`
modalT.append(modalWindowT)
btnT.addEventListener('click', () => {
    console.log('clicked');
    ROOR.append(modalT)
})

const closeModalT = document.createElement('button')
closeModalT.textContent = 'x'
modalWindowT.append(closeModalT)
closeModalT.style.cssText = `
position: absolute;
top: 0;
right: 0;
border: none;
width: 30px;
height: 30px;
background-color: rgb(27, 192, 90);
`
closeModalT.addEventListener('click', () => {
    modalT.remove()
})

modalT.addEventListener('click', (eventT) => {
    if(eventT.target !== modalWindowT)
    modalT.remove()
})

//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

const ROOD = document.getElementById('rood')

const btnF = document.createElement('button')
ROOD.append(btnF)
btnF.textContent = 'ModalWindow!'
btnF.style.cssText = `
background-color: white;
color: black;
font-size: 1rem;
margin: 0 auto;
display: block;
padding: 8px 10px;
border-radius: 50px;
border: none;
width: 200px;
height: 45px;
cursor: pointer;
`
btnF.addEventListener('mouseover', () => {
    btnF.style.backgroundColor = 'rebeccapurple'
})
btnF.addEventListener('mouseout', () => {
    btnF.style.backgroundColor = 'white'
})

const modalF = document.createElement('div')
modalF.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000060;
display: flex;
justify-content: center;
align-items: center;
`

const modalWindowF = document.createElement('div')
modalWindowF.style.cssText = `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 1050px;
height: 380px;
background-color: rgb(170, 201, 220);
padding: 20px;
font-size: 1.5rem;
`

modalWindowF.textContent = ''
const qweTitleF = document.createElement('p')
qweTitleF.textContent = 'Модальные окна можно сделать даже без помощи JS только лишь с помощью CSS, но на практике они оказываются неудобными. Модальное окно Modal. Модальное окно — это эмуляция диалогового окна браузера, появляющегося поверх страницы в ответ на действия пользователя и блокирующего доступ к основному содержимому страницы. Раньше в Контуре этот компонент назывался Лайтбоксом, но мы переименовали его, чтобы не было разночтений. Модальное окно по определению блокирует работу пользователя с родительским окном до тех пор, пока пользователь его не закроет. То есть: Пользователю нельзя позволять прокручивать страницу под ним. При этом, если содержимого в модальном окне очень много, нужно позволить прокручивать содержимое. Преимущество модальных окон в том, что в пользовательском интерфейсе они обеспечивают быстрое, целенаправленное и контекстное взаимодействие. Когда используется модальное окно, загрузка новой страницы не требуется. Такие окна снижают нагрузку с веб-сайта и оптимизируют его работу.'
modalWindowF.append(qweTitleF)
qweTitleF.style.cssText = `
color: black;
text-align: center;
line-height: normal;
`
modalF.append(modalWindowF)
btnF.addEventListener('click', () => {
    console.log('clicked');
    ROOD.append(modalF)
})

const closeModalF = document.createElement('button')
closeModalF.textContent = 'x'
modalWindowF.append(closeModalF)
closeModalF.style.cssText = `
position: absolute;
top: 0;
right: 0;
border: none;
width: 30px;
height: 30px;
background-color: rgb(34, 192, 90);
`
closeModalF.addEventListener('click', () => {
    modalF.remove()
})

modalF.addEventListener('click', (eventF) => {
    if(eventF.target !== modalWindowF)
    modalF.remove()
})