// transform burgerManu

const burgerMenu = document.querySelector(".burgerMenu");

function addClass() {
    burgerMenu.classList.toggle("active")
};

burgerMenu.addEventListener('click', addClass);

//activation burgerMenu

const burgerList = document.querySelector(".burgerList")

function openMobileMenu() {
    burgerList.classList.toggle("avtiveMobileMenu");
    categoriesWomen.classList.remove("categoriesWomenActiv");
    categoriesMen.classList.remove("categoriesWomenActiv");
    categoriesGirls.classList.remove("categoriesWomenActiv");
    categoriesBoys.classList.remove("categoriesWomenActiv");
}

burgerMenu.addEventListener('click', openMobileMenu);

//activation products listWomen

const classList1 = document.querySelector(".classList1")

const categoriesWomen = document.querySelector(".categoriesWomen")

function womenList() {
    categoriesWomen.classList.toggle("categoriesWomenActiv")
}

classList1.addEventListener('click', womenList)

//activation products listMen

const classList2 = document.querySelector(".classList2")

const categoriesMen = document.querySelector(".categoriesMen")

function menList() {
    categoriesMen.classList.toggle("categoriesWomenActiv")
}

classList2.addEventListener('click', menList)

//activation products listGirls

const classList3 = document.querySelector(".classList3")

const categoriesGirls = document.querySelector(".categoriesGirls")

function girlsList() {
    categoriesGirls.classList.toggle("categoriesWomenActiv")
}

classList3.addEventListener('click', girlsList)

//activation products listBoys

const classList4 = document.querySelector(".classList4")

const categoriesBoys = document.querySelector(".categoriesBoys")

function boysList() {
    categoriesBoys.classList.toggle("categoriesWomenActiv")
}

classList4.addEventListener('click', boysList)

// remove class in burgermenu list

const clothesLists = document.querySelectorAll(".clothesList")

clothesLists.forEach(clothesList => {
    clothesList.addEventListener('click', () => {
        closeSubmenu()
        const subMenu = clothesList.querySelector(".submenu")
        subMenu.classList.remove('close')
    }
    )
})


const submenus = document.querySelectorAll(".submenu")

function closeSubmenu() {
    submenus.forEach(submenu => {
        submenu.classList.add("close")
    })
}


// slider 

function slideLeft() {
    const slidersBlock = document.querySelector('.slidersBlock');
    const sliderWidth = document.querySelector('.inSliderMen').offsetWidth; // Assuming all sliders have the same width
    slidersBlock.scrollLeft -= sliderWidth;
}

function slideRight() {
    const slidersBlock = document.querySelector('.slidersBlock');
    const sliderWidth = document.querySelector('.inSliderMen').offsetWidth; // Assuming all sliders have the same width
    slidersBlock.scrollLeft += sliderWidth;
}

