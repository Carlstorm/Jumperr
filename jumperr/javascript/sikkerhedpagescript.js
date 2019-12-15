window.addEventListener("scroll", drawonscroll);
function drawonscroll() {

    var scrollpercent1 = (window.pageYOffset)/(Ssection1.offsetHeight);
    // var scrollpercent2 = (window.pageYOffset-Ssection2.offsetTop)/(Ssection2.offsetHeight-(0));
    // var scrollpercent2 = (window.pageYOffset-(Ssection1.offsetHeight/2))/(Ssection2.offsetTop)
    // var scrollpercent3 = (window.pageYOffset-(Ssection2.offsetHeight/2))/(Ssection3.offsetTop+(Ssection1.offsetHeight/2));
    var scrollpercent2 = (document.body.scrollTop + document.documentElement.scrollTop - Ssection2.offsetTop+(window.innerHeight/2)) / (document.documentElement.scrollHeight - document.documentElement.clientHeight - Ssection2.offsetTop -(window.innerHeight/2));
    var scrollpercent3 = (document.body.scrollTop + document.documentElement.scrollTop - Ssection3.offsetTop+(window.innerHeight/2)) / (document.documentElement.scrollHeight - document.documentElement.clientHeight - Ssection2.offsetTop -(window.innerHeight/2));

    if (scrollpercent1 > 1) {
        scrollpercent1 = 1;
    } else if (scrollpercent1 < 0) {
        scrollpercent1 = 0;
    }


    if (scrollpercent2 > 1) {
        scrollpercent2 = 1;
    } else if (scrollpercent2 < 0) {
        scrollpercent2 = 0;
    }

    if (scrollpercent3 > 1) {
        scrollpercent3 = 1;
    } else if (scrollpercent3 < 0) {
        scrollpercent3 = 0;
    }
    

//     for (var i = 0; i < st1L.length; i++) {
//         var num = i;   
//         window["length"+num+"L"] = st1L[i].getTotalLength();
//         st1L[i].style.strokeDasharray = eval("length"+num+"L");
//         window["draw"+num+"L"] = eval("length"+num+"L") * scrollpercent1;
//         st1L[i].style.strokeDashoffset = eval("length"+num+"L") + (eval("length"+num+"L") - eval("draw"+num+"L"));
//         console.log(window["length"+num+"L"])
// }

for (var i = 0; i < st1L.length; i++) {
            var num = i;   
            window["length"+num+"L"] = st1L[i].getTotalLength();
            st1L[i].style.strokeDasharray = window["length"+num+"L"];
            window["draw"+num+"L"] = window["length"+num+"L"] * scrollpercent1;
            st1L[i].style.strokeDashoffset = window["length"+num+"L"] + window["length"+num+"L"] - window["draw"+num+"L"];
    }


    for (var i = 0; i < st0S.length; i++) {
        var num = i;    
        window["length"+num+"S"] = st0S[i].getTotalLength();
        st0S[i].style.strokeDasharray = eval("length"+num+"S");
        st0S[i].style.strokeDashoffset = eval("length"+num+"S");
        window["draw"+num+"S"] = eval("length"+num+"S") * scrollpercent2;
        st0S[i].style.strokeDashoffset = -eval("length"+num+"S") + eval("length"+num+"S") + (eval("length"+num+"S") - eval("draw"+num+"S"));
    }


    for (var i = 0; i < st1S.length; i++) {
        var num = i;    
        window["length"+num+"L"] = st1S[i].getTotalLength();
        st1S[i].style.strokeDasharray = eval("length"+num+"L");
        window["draw"+num+"L"] = eval("length"+num+"L") * scrollpercent2;
        st1S[i].style.strokeDashoffset = -eval("length"+num+"L") + eval("length"+num+"L") + (eval("length"+num+"L") - eval("draw"+num+"L"));
    }

    for (var i = 0; i < st1D.length; i++) {
        var num = i;    
        window["length"+num+"L"] = st1D[i].getTotalLength();
        st1D[i].style.strokeDasharray = eval("length"+num+"L");
        window["draw"+num+"L"] = eval("length"+num+"L") * scrollpercent3;
        st1D[i].style.strokeDashoffset = (eval("length"+num+"L") - eval("draw"+num+"L"));
    }

    breaklines.style.width = ""+100-scrollpercent1*100+"%";
    breaklines2.style.width = ""+scrollpercent2*100+"%";
    breaklines3.style.width = ""+scrollpercent3*100+"%";

}