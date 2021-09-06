var toggle=0;
function toggleSide(){
    var value;
    if(!toggle){value="250px"; toggle=1;}
    else{value="0px"; toggle=0;}
    document.getElementById("sidebar").style.width = value;
    document.getElementById("main").style.marginLeft = value;
}
