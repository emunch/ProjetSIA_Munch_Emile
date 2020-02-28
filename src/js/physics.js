function ballPhysics(step){
    //limitation de la vitesse de la balle
    let newV
    if(speedY > speed*2){
        speedY = speed*2;
    }

    if (speedX > speed*2){
        speedX = speed*2
    }


    if(ball.position.x - ball.geometry.boundingSphere.radius<= -fieldWidth/2){
        speedX = - speedX;
        ball.position.x = 0;
        ball.position.y = 0;
        console.log("player marque");
        player.setHP(player.hp - 1/(level+1));
        if(player.hp == 0){
            level ++;
            player.setHP(1);
        }

    }

    if(ball.position.x + ball.geometry.boundingSphere.radius >= fieldWidth/2){
        ball.position.x = 0;
        ball.position.y = 0;
        speedX = -speedX;
        bot.setHP(player.hp - 1/(level+1));
        if(bot.hp == 0){
            level ++;
            bot.setHP(1);
        }
    }

    if(ball.position.y - ball.geometry.boundingSphere.radius <= -fieldHeight/2){

        speedY = -speedY;
    }

    if(ball.position.y + ball.geometry.boundingSphere.radius >= fieldHeight/2){

        speedY = -speedY;
    }



    let ray = new THREE.Raycaster(ball.position, new THREE.Vector3(speedX,speedY, 0));
    /*let ray2 = new THREE.Raycaster(ball.position, new THREE.Vector3(speedX,speedY, 0);
    let ray3= new THREE.Raycaster(ball.position, new THREE.Vector3(speedX,speedY, 0);*/



    intersection = ray.intersectObjects(collisions);
    /*intersection.push(ray2.intersectObjects(collisions));
    intersection.push(ray3.intersectObjects(collisions));*/
    if(intersection.length > 0){
        let hit = intersection[0];
        if(hit.distance < ball.geometry.boundingSphere.radius  && (ball.position.x > paddle1.position.x && ball.position.x < paddle2.position.x)) {
             newV = new THREE.Vector3(speedX,speedY, 0).reflect(hit.face.normal);
            speedX = newV.x;
            speedY = newV.y;

        }
    }
    ball.position.x += speedX * speed;
    ball.position.y += speedY * speed;

}




function cpuLogic(){

}
