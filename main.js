const burgerMenu = document.querySelector(".burgerMenu")



function addClass(){
    burgerMenu.classList.toggle("active")

}

burgerMenu.addEventListener('click', addClass)