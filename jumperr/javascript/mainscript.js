var burgermenu = document.getElementById("burgermenu")
var navmenu = document.getElementById("navmenu")
var bar1 = document.getElementById("bar1")
var bar2 = document.getElementById("bar2")
var bar3 = document.getElementById("bar3")
var logo = document.getElementById("logo")
var darkolay2 = document.getElementById("darkolay2");
var underside = document.getElementById("underside");
var st1L = document.getElementsByClassName("st0L");
var st1D = document.getElementsByClassName("st0");
var st0S = document.getElementsByClassName("st0S");
var st1S = document.getElementsByClassName("st1S");
var Ssection1 = document.getElementById("Ssection1");
var Ssection2 = document.getElementById("Ssection2");
var Ssection3 = document.getElementById("Ssection3");
var breaklines = document.getElementById("breaklines");
var breaklines2 = document.getElementById("breaklines2");
var breaklines3 = document.getElementById("breaklines3");


var burgermode = 0;
var paralaxenable = true;
// check mobile
if (window.innerWidth <= 650) {
    paralaxenable = false;
    logo.style.display = "none";
};

// transition fix resize
window.onresize = function() {
    darkolay2.style.transition = 0;
    burgermode = 1;
    popfunction();
    if (window.innerWidth <= 650) {
        paralaxenable = false;
        logo.style.display = "none";
    } else {
        paralaxenable = true; 
        logo.style.display = "inherit";     
    }
};

function popfunction() {
if (burgermode == 0) {
bar1.style.transform = "translateY(10px) rotate(45deg)";
bar2.style.opacity = "0";
bar3.style.transform = "translatey(-8px) rotate(-45deg)";
bar1.style.background = "#00c6a2"
bar3.style.background = "#00c6a2"
bar1.style.height = "4px"
bar3.style.height = "4px"
navmenu.style.transform = "translateX(0%)";
darkolay2.style.opacity = "0.7"
darkolay2.style.transition = "0.4s"
darkolay2.style.pointerEvents = "initial"
burgermode = 1;
} else {
bar1.style.transform = "translateY(0) rotate(0)";
bar2.style.opacity = "1";
bar3.style.transform = "translateY(0) rotate(0)";
navmenu.style.transform = "translateX(-100%)";
bar1.style.background = "white"
bar3.style.background = "white"
bar1.style.height = "2px"
bar3.style.height = "2px"
darkolay2.style.opacity = "0"
darkolay2.style.transition = "0.4s"
darkolay2.style.pointerEvents = "none"
burgermode = 0;
}
}

window.addEventListener("scroll", testar);
function testar() {

    if (paralaxenable) {
        if (window.pageYOffset > 100) {
            navbar.style.boxShadow = "0px 1px 0px 0px #00c6a2"
            navbar.style.height = "35px";
            navbar.style.backgroundColor = "#141a23e7";
            breaklineh.style.margin = "6px 12px 0 12px"
            logo.style.left = "-70px"
            navthing.style.left = "0px"
            logom.style.left = "0px"
    
        } else {
            navbar.style.height = "75px";
            navbar.style.backgroundColor = "#141a23";
            navbar.style.boxShadow = "0px 0px 0px 0px #00c6a2"
            breaklineh.style.margin = "11px 12px 0 12px"
            logo.style.left = "55%"
            navthing.style.left = "-100px"
            logom.style.left = "-46px"
        }
    
    }

    if (burgermode == 1 && paralaxenable == false) {
        window.scrollTo(0, 0)
    }
}

