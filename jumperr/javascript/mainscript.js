var burgermenu = document.getElementById("burgermenu")
var navmenu = document.getElementById("navmenu")
var bar1 = document.getElementById("bar1")
var bar2 = document.getElementById("bar2")
var bar3 = document.getElementById("bar3")
var logo = document.getElementById("logo")
var darkolay2 = document.getElementById("darkolay2");
var underside = document.getElementById("underside");

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
bar1.style.background = "#2fafff"
bar3.style.background = "#2fafff"
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
    if (window.pageYOffset > 100 && paralaxenable) {
        navbar.style.backgroundColor = "#041e29c0"
        navbar.style.height = "35px"
        breaklineh.style.margin = "6px 12px 0 12px"
        logo.style.margin = "4px 0 0 13px"
        logo.style.height = "24px"
    } else {
        navbar.style.backgroundColor = "#102c36"
        navbar.style.height = "50px"
        breaklineh.style.margin = "8px 12px 0 12px"
        logo.style.margin = "10px 0 0 18px"
        logo.style.height = "27px"
    }

    if (burgermode == 1 && paralaxenable == false) {
        window.scrollTo(0, 0)
    }
}



var svar1 = document.getElementById("svar1")
var svar2 = document.getElementById("svar2")


var question1 = document.getElementById("question1")
var question2 = document.getElementById("question2")

var allreadyopen = false;
var sameagain = 0;

var testidid = document.getElementById("testidid")
var testidid2 = document.getElementById("testidid2")

function svarfunc1() {
    if (sameagain != 101) {
        sameagain = 1;
    }
    if (allreadyopen) {
        closeall();
    }
    if (sameagain == 1) {
        svar1.style.height = "100px"
    question1.classList.add("qbaropen");
    allreadyopen = true
    sameagain += 100;
    } else {
        sameagain = 0;
        closeall();
    }
}

function svarfunc2() {
    if (sameagain != 102) {
        sameagain = 2;
    }
    if (allreadyopen) {
        closeall();
    }
    if (sameagain == 2) {
    svar2.style.height = "100px"
    question2.classList.add("qbaropen");
    allreadyopen = true
    sameagain += 100;
    } else {
        sameagain = 0;
        closeall();
    }
}

function svarfunc3() {
    if (sameagain != 103) {
        sameagain = 3;
    }
    if (allreadyopen) {
        closeall();
    }
    if (sameagain == 3) {
        svar3.style.height = "100px"
    question3.classList.add("qbaropen");
    allreadyopen = true
    sameagain += 100;
    } else {
        sameagain = 0;
        closeall();
    }
}

function svarfunc4() {
    if (sameagain != 104) {
        sameagain = 4;
    }
    if (allreadyopen) {
        closeall();
    }
    if (sameagain == 4) {
        svar4.style.height = "100px"
    question4.classList.add("qbaropen");
    allreadyopen = true
    sameagain += 100;
    } else {
        sameagain = 0;
        closeall();
    }
}

function svarfunc5() {
    if (sameagain != 105) {
        sameagain = 5;
    }
    if (allreadyopen) {
        closeall();
    }
    if (sameagain == 5) {
        svar5.style.height = "100px"
    question5.classList.add("qbaropen");
    allreadyopen = true
    sameagain += 100;
    } else {
        sameagain = 0;
        closeall();
    }
}

function svarfunc6() {
    if (sameagain != 106) {
        sameagain = 6;
    }
    if (allreadyopen) {
        closeall();
    }
    if (sameagain == 6) {
        svar6.style.height = "100px"
    question6.classList.add("qbaropen");
    allreadyopen = true
    sameagain += 100;
    } else {
        sameagain = 0;
        closeall();
    }
}

function svarfunc7() {
    if (sameagain != 107) {
        sameagain = 7;
    }
    if (allreadyopen) {
        closeall();
    }
    if (sameagain == 7) {
        svar7.style.height = "100px"
    question7.classList.add("qbaropen");
    allreadyopen = true
    sameagain += 100;
    } else {
        sameagain = 0;
        closeall();
    }
}

function svarfunc8() {
    if (sameagain != 108) {
        sameagain = 8;
    }
    if (allreadyopen) {
        closeall();
    }
    if (sameagain == 8) {
        svar8.style.height = "100px"
    question8.classList.add("qbaropen");
    allreadyopen = true
    sameagain += 100;
    } else {
        sameagain = 0;
        closeall();
    }
}

function svarfunc9() {
    if (sameagain != 109) {
        sameagain = 9;
    }
    if (allreadyopen) {
        closeall();
    }
    if (sameagain == 9) {
        svar9.style.height = "100px"
    question9.classList.add("qbaropen");
    allreadyopen = true
    sameagain += 100;
    } else {
        sameagain = 0;
        closeall();
    }
}

function closeall() {
    svar1.style.height = "0px"
    svar2.style.height = "0px"
    svar3.style.height = "0px"
    svar4.style.height = "0px"
    svar5.style.height = "0px"
    svar6.style.height = "0px"
    svar7.style.height = "0px"
    svar8.style.height = "0px"
    svar9.style.height = "0px"

    question1.classList.remove("qbaropen");
    question2.classList.remove("qbaropen");
    question3.classList.remove("qbaropen");
    question4.classList.remove("qbaropen");
    question5.classList.remove("qbaropen");
    question6.classList.remove("qbaropen");
    question7.classList.remove("qbaropen");
    question8.classList.remove("qbaropen");
    question9.classList.remove("qbaropen");
}