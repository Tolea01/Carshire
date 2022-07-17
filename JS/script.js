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