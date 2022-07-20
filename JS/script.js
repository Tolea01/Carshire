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

suv.addEventListener('click', () => {
    convertible.classList.remove('convertible-active');
    pickup.classList.remove('pickup-active');
    suv.classList.add('suv-active');
})

pickup.addEventListener('click', () => {
    suv.classList.remove('suv-active');
    coupe.classList.remove('coupe-active');
    pickup.classList.add('pickup-active');
})

coupe.addEventListener('click', () => {
    convertible.classList.remove('convertible-active');
    pickup.classList.remove('pickup-active');
    coupe.classList.add('coupe-active');
})

convertible.addEventListener('click', () => {
    coupe.classList.remove('coupe-active');
    suv.classList.remove('suv-active');
    convertible.classList.add('convertible-active');
})



let selected = document.querySelector(".selected");
let optionsContainer = document.querySelector(".options-container");
let optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    selected.classList.toggle("selected-active");
    selected.classList.toggle("selected-arrow");
    optionsContainer.classList.toggle("options-container-active");
  });
  
  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("options-container-active");
      selected.classList.remove("selected-active");
      selected.classList.remove("selected-arrow");
    });
  });