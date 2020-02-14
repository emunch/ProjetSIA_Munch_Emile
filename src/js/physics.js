function ballPhysics(step){

    //limitation de la vitesse de la balle

    if(speedY > speed*2){
        speedY = speed*2;
    }

    if (speedX > speed*2){
        speedX = speed*2
    }


    if(ball.position.x <= -fieldWidth/2){
        speedX = - speedX;
    }

    if(ball.position.x >= fieldWidth/2){

        speedX = -speedX;
    }

    if(ball.position.y <= -fieldHeight/2){

        speedY = -speedY;
    }

    if(ball.position.y >= fieldHeight/2){

        speedY = -speedY;
    }


    ball.position.x += speedX * speed;
    ball.position.y += speedY * speed;

}


function cpuLogic(){
    
}
