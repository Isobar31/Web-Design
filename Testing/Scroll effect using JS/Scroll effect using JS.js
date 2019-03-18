function Scroll(){
    var top = document.getElementById('header');
    var yPos = window.pageYOffset;
    if (yPos > 587){
        top.style.height = "70px";
    }
    else
    {
        top.style.height = "150px";
    }
}

window.addEventListener("scroll", Scroll);
