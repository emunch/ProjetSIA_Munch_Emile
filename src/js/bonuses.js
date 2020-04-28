function bonus(){
    if(isPlaying){
      console.log("it's time to bonus!")
    
      reset_bonuses();
    //application des bonus
    let bonus = Math.trunc(Math.random()*9);
    apply_bonus(bonus);
    
   }
  }
  
  
  
  function reset_speed(){
    paddle2Speed=2;
    paddle1Speed= 2;
  }
  
  function reset_bonuses(){
    console.log(currBonus);
    //remise a 0 des bonus si necessaire
    switch(currBonus){
      case bonuses.SELF_LARGE:
        scene.remove(paddle1);
        paddle1.scale.y = 1;
        scene.add(paddle1);
      break;
      case bonuses.ENEMY_LARGE:
        scene.remove(paddle2);
        paddle2.scale.y = 1;
        scene.add(paddle2);
      break;
      case bonuses.DA_WALL:
        //TODO
      break;
      case bonuses.INVERTED_CONTROLS:
          speed = -speed;
      break;
    }
  }

 function apply_bonus(bonus){
    switch(bonus){
        case bonuses.DA_WALL:
          console.log("DA WALLU");
          currBonus = bonuses.DA_WALL;
        break;
        case bonuses.ENEMY_HEAL:
          currBonus = bonuses.ENEMY_HEAL;
          console.log("da bad healu");
          if(botH<3 && botH >0){
            botH++;
            switch(botH){
              case 2:
                botUI.childNodes[1].style.background = "red";
                botUI.childNodes[3].style.background = "cadetblue";
                botUI.childNodes[5].style.background = "cadetblue";
              break;
              case 3:
                botUI.childNodes[1].style.background = "cadetblue";
                botUI.childNodes[3].style.background = "cadetblue";
                botUI.childNodes[5].style.background = "cadetblue";
              break;
            }
          }
        break;
        case bonuses.SELF_HEAL:
          currBonus = bonuses.SELF_HEAL;
          console.log("da good healu");
          if(playerH< 3 && playerH>0){
            playerH++;
            switch (playerH){
              case 2:
                playerUI.childNodes[1].style.background = "red";
                playerUI.childNodes[3].style.background = "cadetblue";
                playerUI.childNodes[5].style.background = "cadetblue"; 
              break;
              case 3:
                playerUI.childNodes[1].style.background = "cadetblue";
                playerUI.childNodes[3].style.background = "cadetblue";
                playerUI.childNodes[5].style.background = "cadetblue";
              break;
            }
          }
        break;
        case bonuses.SELF_LARGE:
          currBonus = bonuses.SELF_LARGE;
          scene.remove(paddle1);
          paddle1.scale.y = 1.2;
          scene.add(paddle1);
        break;
        case bonuses.ENEMY_LARGE:
          currBonus = bonuses.ENEMY_LARGE;
          scene.remove(paddle2);
          paddle2.scale.y = 1.2;
          scene.add(paddle2);
        break;
        case bonuses.ENEMY_STOP:
          currBonus = bonuses.ENEMY_STOP;
          paddle2Speed= 0;
          let T1 = setTimeout(reset_speed, 1000);
        break;
        case bonuses.SELF_STOP:
          currBonus = bonuses.SELF_STOP;
          paddle1speed=0;
          let T2= setTimeout(reset_speed, 1000);
        break;
        case bonuses.ZA_WARUDO:
          currBonus = bonuses.ZA_WARUDO;
          paddle12peed=0;
          paddle2Speed=0;
          let T3 = setTimeout(reset_speed, 1000);
        break;
        case bonuses.INVERTED_CONTROLS:
          currBonus = bonuses.INVERTED_CONTROLS;
          speed = -speed;
        break;
        default:
            ("je sais pas ce bonus :", currBonus);
        break;
    
      }
 }