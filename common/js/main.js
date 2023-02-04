const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const menuToggle = document.getElementById('menu-toggle')
const leftNavicationLogo = document.getElementById('left-navication-logo')
const mainContent = document.getElementById('main-content')

menuBtn.onclick = () => {
    menuToggle.classList.add('left-navication-wrap-active')
}

closeBtn.onclick = () => {
    menuToggle.classList.remove('left-navication-wrap-active')
}