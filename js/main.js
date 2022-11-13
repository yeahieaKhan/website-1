//menu icon
function menuFunction(x){
    x.classList.toggle("change")
}
//frist menu show
var menuClicks = document.getElementById("menuClick");
var menuBar = document.querySelector(".menu");
menuClicks.addEventListener("click", function(){
    menuBar.classList.toggle("openmenu")
})


// Nav scroll 

var navBarBg = document.querySelector(".nav-scrollBg");
window.onscroll = function(){
    var scrollNav = window.scrollY;
    if(scrollNav > 100){
        navBarBg.classList.add("scroll-bg");
    }else{
        navBarBg.classList.remove("scroll-bg");
    }
}