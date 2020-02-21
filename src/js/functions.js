function addPlayingPlane(){
    //adding game plane
    var planeMaterial =
    new THREE.MeshLambertMaterial(
    {
        color: 0x4BD121
    });

// create the playing surface plane
    var plane = new THREE.Mesh(
        new THREE.PlaneGeometry(
        fieldWidth,	// 95% of table width, since we want to show where the ball goes out-of-bounds
        fieldHeight,
        32),
        planeMaterial);
    scene.add(plane);
}

function addPaaddles(){
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

      console.log(paddle1);
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
    paddle1.geometry.name = "paddle";
    paddle2.geometry.name = "paddle";

    collisions.push(paddle1);
    collisions.push(paddle2);
}
