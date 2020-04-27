
function input(e){

    switch(e.keyCode){
        case Key.j:
            //TODO
            console.log("je lance un joker");
        break;
        case Key.i:
            invincible = !invincible;
            if(invincible){
                console.log("god mode activated");
            }else{
                console.log("god mode disabled");
            }
        break;
        case Key.space:
            isPlaying = !isPlaying
            if(playerH == 0 || botH ==0){
                playerH=3;
                botH=3;
                playerUI.childNodes[1].style.background = "cadetblue";
                playerUI.childNodes[3].style.background = "cadetblue";
                playerUI.childNodes[5].style.background = "cadetblue";
                botUI.childNodes[1].style.background = "cadetblue";
                botUI.childNodes[3].style.background = "cadetblue";
                botUI.childNodes[5].style.background = "cadetblue";
            }
        break;
        case Key.k:
            if(level < maxLevel){
                level++
            }
        break;
        case Key.f:
            elem = document.getElementById("SIApp");
            if (elem.mozRequestFullScreen && !fc) { 
                elem.mozRequestFullScreen();
                fc = true;
            }else if(fc){
                fc = false;
                if (document.mozCancelFullScreen) { 
                    document.mozCancelFullScreen();
                }
            }
        break;
        case Key.d1:
            camera = cameras[0];
        break;
        case Key.d2:
            camere = cameras[1];
        break; 
        default:

        break;
    }
}
