function loaded(){
    var width = window.innerWidth;
    if ((width) < 600){
        var menu = document.getElementById("navbar");
        menu.style.visibility = "hidden";
        menu.style.opacity = "0";
        menu.style.display = "none";
    } else{
        var menu = document.getElementById("navbar");
        menu.style.visibility = "visible";
        menu.style.opacity = "1";
        menu.style.display = "flex";
    }
}

function showMenu() {
    var menu = document.getElementById("navbar")
    if (menu.style.visibility === "hidden"){
        menu.style.opacity = "0"
        menu.style.display = "flex"
        menu.style.visibility = "visible";
        menu.style.transition = "1s"
        setTimeout(() => {
            menu.style.opacity = '1';
        }, 500);
        
    }
    else{
        menu.style.visibility = "hidden";
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.style.display = "none"
        }, 500);
    }
}