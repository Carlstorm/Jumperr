var burgermenu = document.getElementById("burgermenu")
var navmenu = document.getElementById("navmenu")
var bar1 = document.getElementById("bar1")
var bar2 = document.getElementById("bar2")
var bar3 = document.getElementById("bar3")
var logo = document.getElementById("logo")
var darkoverlay = document.getElementById("darkoverlay");
var darkolay2 = document.getElementById("darkolay2");
var contentwrap = document.getElementById("contentwrap");
var disablescroll = document.getElementById("disablescroll");
var car = document.getElementById("carwrap");
var forside = document.getElementById("forside");
var underside = document.getElementById("underside");
var cloudclose = document.getElementById("cloudclose2");
var skyline = document.getElementById("skyline");

var burgermode = 0;
var paralaxenable = true;
// check mobile
if (window.innerWidth <= 650) {
    paralaxenable = false;
    cloudclose.style.animationName = "non"
    underside.style.height = window.innerHeight;
};

// transition fix resize
window.onresize = function() {
    darkoverlay.style.transition = 0;
    burgermode = 1;
    popfunction();
    if (window.innerWidth <= 650) {
        paralaxenable = false;
        cloudclose.style.animationName = "non"
    } else {
        paralaxenable = true;      
        cloudclose.style.animationName = "example2"
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


// forside 
window.addEventListener("scroll", testar);
var skylineneight = document.getElementById("skylineneight");
var Rshadow = document.getElementById("Rshadow");
var carshadow = document.getElementById("carshadow");
var skywrap = document.getElementById("skywrap");
var lamp = document.getElementById("lamp1");
var navbar = document.getElementById("navbar");
var breaklineh = document.getElementById("breaklineh");
var difference

function testar() {
    if (window.pageYOffset < forside.offsetHeight && paralaxenable ) {
        difference = forside.offsetHeight+(window.pageYOffset-forside.offsetHeight)
        skyline.style.transform = "translate(-50%, "+(-100+(difference/30))+"%)";
        Rshadow.style.height = ""+(20+(difference/100)*10)+"%";
        carshadow.style.transform = "translate(-50%, "+(0+(difference/50))+"%) scaleY("+(1-(difference/1000))+")";
        car.style.transform = "translate(-50%, "+(-50-(difference/40))+"%)";
        skywrap.style.transform = "translate(0%, "+(-0+(difference/20))+"%)";
    }

    if (window.pageYOffset > vid.offsetHeight+200 && paralaxenable) {
        resetvidfunc();
    }

    if (burgermode == 1 && paralaxenable == false) {
        window.scrollTo(0, 0)
    }
    
    if (paralaxenable) {
    if (window.pageYOffset > 100) {
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

}
}


var vidolay = document.getElementById("vidolay");
var vid = document.getElementById("JumperrVideo");
var forside = document.getElementById("forside");
var darkoverlay2 = document.getElementById("darkoverlay2");
var st0 = document.getElementById("st0");

function playvidfunc() {
    vidolay.style.transition = "1s"
    vidolay.style.opacity = "0"
    vidolay.style.pointerEvents = "none"
    darkoverlay.style.transition = "1s"
    darkoverlay.style.opacity = "0.7"
    st0.style.fill = "#167dbd9c"
    vid.play();
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