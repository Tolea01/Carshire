const burget_menu = document.querySelector('.burger');
burget_menu.addEventListener('click', () =>{
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


let priceSlider = document.getElementById("price-slider");
let selectValue = document.getElementById("select-value");
priceSlider.oninput = function () {
    selectValue.style.left = this.value + "%";
}