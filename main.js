// transform burgerManu

const burgerMenu = document.querySelector(".burgerMenu");

function addClass(){
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

function removeClass() {
    var list1 = document.getElementById("list1").classList;
    var list2 = document.getElementById("list2").classList;
    var list3 = document.getElementById("list3").classList;
    var list4 = document.getElementById("list4").classList;

    if(list1.contains("categoriesWomenActiv")){
        list2.remove("categoriesWomenActiv")
        list3.remove("categoriesWomenActiv")
        list4.remove("categoriesWomenActiv")
    }else if(list2.contains("categoriesWomenActiv")){
        list1.remove("categoriesWomenActiv")
        list3.remove("categoriesWomenActiv")
        list4.remove("categoriesWomenActiv")
    }else if(list3.contains("categoriesWomenActiv")){
        list1.remove("categoriesWomenActiv")
        list2.remove("categoriesWomenActiv")
        list4.remove("categoriesWomenActiv")
    }else if(list4.contains("categoriesWomenActiv")){
        list1.remove("categoriesWomenActiv")
        list2.remove("categoriesWomenActiv")
        list3.remove("categoriesWomenActiv")
    }
}