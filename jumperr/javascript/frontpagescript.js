// forside 
window.addEventListener("scroll", testar);
var skyline = document.getElementById("skyline");
var cloudclose = document.getElementById("cloudclose2");
var Rshadow = document.getElementById("Rshadow");
var car = document.getElementById("carwrap");
var carshadow = document.getElementById("carshadow");
var skywrap = document.getElementById("skywrap");
var lamp = document.getElementById("lamp1");
var navbar = document.getElementById("navbar");
var breaklineh = document.getElementById("breaklineh");
var logom = document.getElementById("logom");
var underside = document.getElementById("underside");
var undersidetop = document.getElementById("undersidetop");
var difference

function testar() {
    if (window.pageYOffset < forside.offsetHeight && paralaxenable ) {
        difference = window.pageYOffset;
        skyline.style.transform = "translate(-50%, "+(-100+(difference/30))+"%)";
        undersidetop.style.transform = "translate(-50%, "+(-(difference/11))+"%)";
        carshadow.style.transform = "translate(-50%, "+(5-(difference/200))+"%) scaleY("+(1-(difference/700))+")";
        car.style.transform = "translate(-50%, "+(-53-(difference/39))+"%)";
        skywrap.style.transform = "translate(0%, "+(-0+(difference/20))+"%)";
    }

    if (window.pageYOffset > vid.offsetHeight+200 && paralaxenable) {
        resetvidfunc();
    }
    
}

var vidolay = document.getElementById("vidolay");
var vid = document.getElementById("JumperrVideo");
var forside = document.getElementById("forside");
var darkoverlay2 = document.getElementById("darkoverlay2");
var playbut = document.getElementById("playbut");

function playvidfunc() {
    vidolay.style.transition = "1s"
    vidolay.style.opacity = "0"
    vidolay.style.pointerEvents = "none"
    darkoverlay.style.transition = "1s"
    darkoverlay.style.opacity = "0.7"
    vid.play();
    playbut.style.display = "none"

}

function resetvidfunc() {
    darkoverlay.style.opacity = "0"
    vid.pause();
}

vid.onplay = function() {
    playvidfunc();
};

vid.onpause = function() {
    resetvidfunc();
};