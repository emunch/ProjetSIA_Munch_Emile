function ballPhysics(step){
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
    ball.position.x += speedX;
    ball.position.y += speedY

}
