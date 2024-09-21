const menuList = document.querySelector('.navlist')
const menu = document.getElementById('menu')
const closexx = document.querySelector('.fa-x')

menu.addEventListener('click', ()=>{
    menuList.style.display = "flex"
})
function closeMenu(){
    menuList.style.display = "none"
}

closexx.addEventListener("click", closeMenu)

