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
    console.log(plane);
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
