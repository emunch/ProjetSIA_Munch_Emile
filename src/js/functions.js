function addPlayingPlane(){
    //adding game plane
    var planeMaterial =
    new THREE.MeshLambertMaterial(
    {
        color: 0x4BD121
    });

// create the playing surface plane
     plane = new THREE.Mesh(
        new THREE.PlaneGeometry(
        fieldWidth,
        fieldHeight),
        planeMaterial);

    plane.geometry.parameters.width = fieldWidth;
    plane.geometry.parameters.height = fieldHeight;
    scene.add(plane);
}

function addPaddles(){
        // set up the paddle vars
        var paddle1Material = new THREE.MeshLambertMaterial(
        {
            color: 0xFFFFFF
        });
    // set up paddle 1
    paddle1 = new THREE.Mesh(
      new THREE.CubeGeometry(
    	paddleWidth,
    	paddleHeight,
    	paddleDepth,
    	paddleQuality,
    	paddleQuality,
    	paddleQuality),
      paddle1Material);

    // add the paddle to the scene
    scene.add(paddle1);

    var paddle2Material = new THREE.MeshLambertMaterial(
    {
        color: 0x000000
    });
    // Set up the second paddle
    paddle2 = new THREE.Mesh(
      new THREE.CubeGeometry(
    	paddleWidth,
    	paddleHeight,
    	paddleDepth,
    	paddleQuality,
    	paddleQuality,
    	paddleQuality),
      paddle2Material);

    // Add the second paddle to the scene
    scene.add(paddle2);

    // set paddles on each side of the table
    paddle1.position.x = -fieldWidth/2 + paddleWidth + 20;
    paddle2.position.x = fieldWidth/2 - paddleWidth -20;

    // lift paddles over playing surface
    paddle1.position.z = paddleDepth;
    paddle2.position.z = paddleDepth;
    paddle1.name = "paddle";
    paddle2.name = "paddle";

    collisions.push(paddle1);
    collisions.push(paddle2);
}


function addWalls(){
    console.log ("largeur :", fieldWidth, "hauteur: ", fieldHeight)
    walls.push(new THREE.Mesh(new THREE.CubeGeometry(plane.geometry.parameters.width, .1, 20), new THREE.MeshLambertMaterial({color: 0x000000})));
    walls[0].position.y = fieldHeight/2+ walls[0].geometry.parameters.height/2;
    walls[0].position.z = walls[0].geometry.parameters.depth/2


    walls.push(new THREE.Mesh(new THREE.CubeGeometry(plane.geometry.parameters.width, .1, 20), new THREE.MeshLambertMaterial({color: 0x000000})));
    walls[1].position.y = -fieldHeight/2+ walls[1].geometry.parameters.height/2;
    walls[1].position.z = walls[1].geometry.parameters.depth/2

    walls.push(new THREE.Mesh(new THREE.CubeGeometry( .1 , plane.geometry.parameters.height, 20), new THREE.MeshLambertMaterial({color: 0x000000})));
    walls[2].position.x = -fieldWidth/2+ walls[2].geometry.parameters.width/2
    walls[2].position.z = walls[2].geometry.parameters.depth/2

    walls.push(new THREE.Mesh(new THREE.CubeGeometry( .1 , plane.geometry.parameters.height, 20), new THREE.MeshLambertMaterial({color: 0x000000})));
    walls[3].position.x = fieldWidth/2+ walls[3].geometry.parameters.width/2
    walls[3].position.z = walls[3].geometry.parameters.depth/2

    walls.forEach(e => scene.add(e));
    walls.forEach(e => collisions.push(e));
}

function bonus(){
  if(isPlaying){
    console.log("it's time to bonus!")
  
    reset_bonuses();
  

  //application des bonus
  let bonus = Math.trunc(Math.random()*8);
  
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

  }
 }
}

function movePaddles(){
  if(keyboard.pressed("left")){
    if(paddle1.position.y+paddleHeight/2 < fieldHeight/2){
      paddle1.position.y += paddle1DirY * paddle1Speed;
    }
  }
  if(keyboard.pressed("right")){
    if(paddle1.position.y-paddleHeight/2 > -fieldHeight/2){
      paddle1.position.y -= paddle1DirY*paddle1Speed;
    }
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
      screenLeft.add(paddle1);
    break;
    case bonuses.ENEMY_LARGE:
      scene.remove(paddle2);
      paddle2.scale.y = 1;
      scenene.add(paddle2);
    break;
    case bonuses.DA_WALL:
      //TODO
    break;
  }
}
