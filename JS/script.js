const burget_menu = document.querySelector('.burger');
burget_menu.addEventListener('click', () => {
    burget_menu.classList.toggle('burger-active')
})


window.onscroll = () => {
    let header = document.querySelector('.navbar');

    if (window.pageYOffset > 50) {
        header.classList.add('fixed-top');
    }

    else {
        header.classList.remove('fixed-top')
    }
}


let range = document.querySelector("#price-slider");
let rangeNum = document.querySelector(".slider-value");
let progressBar = document.querySelector(".progress-bar");
range.oninput = function () {
    rangeNum.style.left = this.value / 5.53 + "px";
    progressBar.style.width = this.value / 5.53 + "px";
    rangeNum.innerHTML = this.value + "$";
}


let suv = document.querySelector(".suv");
let pickup = document.querySelector(".pickup");
let coupe = document.querySelector(".coupe");
let convertible = document.querySelector(".convertible");
let vehicleText = document.querySelector(".vehicle-text");

suv.addEventListener('click', () => {
    convertible.classList.remove('convertible-active');
    coupe.classList.remove('coupe-active');
    pickup.classList.remove('pickup-active');
    suv.classList.add('suv-active');
})

pickup.addEventListener('click', () => {
    convertible.classList.remove('convertible-active');
    coupe.classList.remove('coupe-active');
    suv.classList.remove('suv-active');
    pickup.classList.add('pickup-active');
})

coupe.addEventListener('click', () => {
    convertible.classList.remove('convertible-active');
    suv.classList.remove('suv-active');
    pickup.classList.remove('pickup-active');
    coupe.classList.add('coupe-active');
})

convertible.addEventListener('click', () => {
    suv.classList.remove('suv-active');
    coupe.classList.remove('coupe-active');
    pickup.classList.remove('pickup-active');
    convertible.classList.add('convertible-active');
})

// function click(clickElem, delElem1, delElem1class, delElem2,
//     delElem2class, delElem3, delElem3class, addElem4, addElemclass) {
//     clickElem.addEventListener('click', () => {
//         delElem1.classList.remove('delElem1class');
//         delElem2.classList.remove('delElem2class');
//         delElem3.classList.remove('delElem3class');
//         addElem4.classList.add('addElemclass');
//     })
// }
// click(suv, convertible, convertible-active, coupe, coupe-active,
//     pickup, pickup-active, suv, suv-active);
