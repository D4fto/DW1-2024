const menu = document.getElementById('menuIcon')
const close = document.getElementById('closeIcon')
const menuV = document.getElementById('menu_v')
menu.addEventListener('click',open)
close.addEventListener('click',closef)
function closef(){
    menuV.style.display = 'none'
    close.style.display = 'none'
    menu.style.display = 'flex'
}
function open(){
    menuV.style.display = 'flex'
    close.style.display = 'flex'
    menu.style.display = 'none'
}