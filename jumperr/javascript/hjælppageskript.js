var svar1 = document.getElementById("svar1")
var svar2 = document.getElementById("svar2")


var question1 = document.getElementById("question1")
var question2 = document.getElementById("question2")

var allreadyopen = false;
var sameagain = 0;


function svarfunc1() {
    if (sameagain != 101) {
        sameagain = 1;
    }
    if (allreadyopen) {
        closeall();
    }
    if (sameagain == 1) {
        svar1.style.height = "100px"
        svar1.style.borderWidth = "0 0 1px 0"
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
    svar2.style.borderWidth = "0 0 1px 0"
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
        svar3.style.borderWidth = "0 0 1px 0"
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
        svar4.style.borderWidth = "0 0 1px 0"
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
        svar5.style.borderWidth = "0 0 1px 0"
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
        svar6.style.borderWidth = "0 0 1px 0"
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
        svar7.style.borderWidth = "0 0 1px 0"
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
        svar8.style.borderWidth = "0 0 1px 0"
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
        svar9.style.borderWidth = "0 0 1px 0"
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
    svar1.style.borderWidth = "0 0 0 0"
    svar2.style.borderWidth = "0 0 0 0"
    svar3.style.borderWidth = "0 0 0 0"
    svar4.style.borderWidth = "0 0 0 0"
    svar5.style.borderWidth = "0 0 0 0"
    svar6.style.borderWidth = "0 0 0 0"
    svar7.style.borderWidth = "0 0 0 0"
    svar8.style.borderWidth = "0 0 0 0"
    svar9.style.borderWidth = "0 0 0 0"



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