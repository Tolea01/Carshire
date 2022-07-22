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



let selectBrand = document.querySelector(".select-brand");
let selectModel = document.querySelector(".select-model");
let selectYear = document.querySelector(".select-year");
let optionsBrands = document.querySelector(".options-brands-container");
let optionsModels = document.querySelector(".options-models-container");
let optionsYears = document.querySelector(".options-years-container");
let optionsListBrands = document.querySelectorAll(".option-list-brands");
let optionsListModels = document.querySelectorAll(".option-list-models");
let optionsListYears = document.querySelectorAll(".option-list-years");

selectBrand.addEventListener("click", () => {
    selectYear.classList.remove("selected-active");
    selectYear.classList.remove("selected-arrow");
    optionsYears.classList.remove("options-container-active");
    selectModel.classList.remove("selected-active");
    selectModel.classList.remove("selected-arrow");
    optionsModels.classList.remove("options-container-active");
    selectBrand.classList.toggle("selected-active");
    selectBrand.classList.toggle("selected-arrow");
    optionsBrands.classList.toggle("options-container-active");
});

selectModel.addEventListener("click", () => {
    selectBrand.classList.remove("selected-active");
    selectBrand.classList.remove("selected-arrow");
    optionsBrands.classList.remove("options-container-active");
    selectYear.classList.remove("selected-active");
    selectYear.classList.remove("selected-arrow");
    optionsYears.classList.remove("options-container-active");
    selectModel.classList.toggle("selected-active");
    selectModel.classList.toggle("selected-arrow");
    optionsModels.classList.toggle("options-container-active");
});

selectYear.addEventListener("click", () => {
    selectBrand.classList.remove("selected-active");
    selectBrand.classList.remove("selected-arrow");
    optionsBrands.classList.remove("options-container-active");
    selectModel.classList.remove("selected-active");
    selectModel.classList.remove("selected-arrow");
    optionsModels.classList.remove("options-container-active");
    selectYear.classList.toggle("selected-active");
    selectYear.classList.toggle("selected-arrow");
    optionsYears.classList.toggle("options-container-active");
});

optionsListBrands.forEach(o => {
    o.addEventListener("click", () => {
      selectBrand.innerHTML = o.querySelector("label").innerHTML;
      optionsBrands.classList.remove("options-container-active");
      selectBrand.classList.remove("selected-active");
      selectBrand.classList.remove("selected-arrow");
    });
  });

  optionsListModels.forEach(o => {
    o.addEventListener("click", () => {
      selectModel.innerHTML = o.querySelector("label").innerHTML;
      optionsModels.classList.remove("options-container-active");
      selectModel.classList.remove("selected-active");
      selectModel.classList.remove("selected-arrow");
    });
  });

  optionsListYears.forEach(o => {
    o.addEventListener("click", () => {
      selectYear.innerHTML = o.querySelector("label").innerHTML;
      optionsYears.classList.remove("options-container-active");
      selectYear.classList.remove("selected-active");
      selectYear.classList.remove("selected-arrow");
    });
  });