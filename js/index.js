// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function () {
    toggleNav();
});

// OnScroll minimize nav
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.height = "55px";
        document.getElementById("navbar").style.backgroundColor = "#fff";
        document.getElementById("navbar").style.boxShadow = "0 2px 2px -2px rgba(0,0,0,.2)";
        document.getElementById("logo").style.width = "170px";
        document.getElementById("logo").style.margin = "0px";
    } else if (document.body.scrollTop <= 80 || document.documentElement.scrollTop <= 80) {
        document.getElementById("logo").style.width = "200px";
        document.getElementById("logo").style.margin = "-20px";
        document.getElementById("navbar").style.boxShadow = "0 2px 2px -2px rgba(0,0,0,0)";
        document.getElementById("navbar").style.height = "70px";
    }
    
}