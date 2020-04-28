var visible = false;
function input(e){

    switch(e.keyCode){
        case Key.j:
            currBonus = (currBonus+1)%9;
            reset_bonuses();
            apply_bonus(currBonus);
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
                level++;
                document.getElementById("level").textContent ="level: "+level;
                baseSpeed += 0.3;
                speed = baseSpeed;
                globalPaddle2Speed += 0.05;
                paddle2Speed = globalPaddle2Speed;
                reset_bonuses();
                scene.remove(skybox);
                display_SB();
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
        case Key.p:
            toggle_music();
        break;
        case Key.h:
            let elt = document.getElementById("help");
            console.log(elt);
            if(!visible){
                elt.style.visibility = "visible";
                visible = true;
            }else{
                elt.style.visibility = "hidden";
                visible = false;
            }
            
        break;
        default:
            console.log("valeur inconnue, code ascii :", e.keyCode);
        break;
    }
}
