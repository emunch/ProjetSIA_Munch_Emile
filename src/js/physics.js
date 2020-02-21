function ballPhysics(step){
    //limitation de la vitesse de la balle

    if(speedY > speed*2){
        speedY = speed*2;
    }

    if (speedX > speed*2){
        speedX = speed*2
    }


    if(ball.position.x - ball.geometry.boundingSphere.radius<= -fieldWidth/2){
        speedX = - speedX;
        console.log("l'adversaire marque un point");
    }

    if(ball.position.x + ball.geometry.boundingSphere.radius >= fieldWidth/2){
        console.log("je marque un point")
        speedX = -speedX;
    }

    if(ball.position.y - ball.geometry.boundingSphere.radius <= -fieldHeight/2){

        speedY = -speedY;
    }

    if(ball.position.y+ ball.geometry.boundingSphere.radius >= fieldHeight/2){

        speedY = -speedY;
    }



    let ray = new THREE.Raycaster(ball.position, new THREE.Vector3(speedX,speedY, 0));
    let ray2 = new THREE.Raycaster(new THREE.Vector3(ball.position.x, ball.position.y + ball.geometry.boundingSphere.radius, ball.position.z), new THREE.Vector3(speedX,speedY, 0));
    let ray3= new THREE.Raycaster(new THREE.Vector3(ball.position.x, ball.position.y - ball.geometry.boundingSphere.radius, ball.position.z), new THREE.Vector3(speedX,speedY, 0));
    if(!colided){
            console.log("1: ",ray);
            console.log("2: ", ray2);
            console.log( "3: ",ray3);
            colided = true;
    }

    let intersection = ray.intersectObjects(collisions);
    intersection.push( ray2.intersectObjects(collisions));
    intersection.push( ray3.intersectObjects(collisions));
    if(intersection.length > 0){
        let hit = intersection[0];
        if(hit.distance < ball.geometry.boundingSphere.radius && (ball.position.x > paddle1.position.x && ball.position.x < paddle2.position.x)){
            let newV = new THREE.Vector3(speedX,speedY, 0).reflect(hit.face.normal);
            speedX = newV.x;
            speedY = newV.y;
        }
    }

    ball.position.x += speedX * speed;
    ball.position.y += speedY * speed;

}




function cpuLogic(){

}
