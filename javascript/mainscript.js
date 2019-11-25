var burgermenu = document.getElementById("burgermenu")
var navmenu = document.getElementById("navmenu")
var bar1 = document.getElementById("bar1")
var bar2 = document.getElementById("bar2")
var bar3 = document.getElementById("bar3")
var logo = document.getElementById("logo")

var burgermode = 0;

function popfunction() {
if (burgermode == 0) {
bar1.style.transform = "translateY(8.5px) rotate(45deg)";
bar2.style.opacity = "0";
bar3.style.transform = "translateY(-10px) rotate(-45deg)";
bar1.style.background = "red"
bar3.style.background = "red"
burgermode = 1;
navmenu.style.transform = "translateX(0%)";
} else {
bar1.style.transform = "translateY(0) rotate(0)";
bar2.style.opacity = "1";
bar3.style.transform = "translateY(0) rotate(0)";
burgermode = 0;
navmenu.style.transform = "translateX(-100%)";
bar1.style.background = "white"
bar3.style.background = "white"
}
}