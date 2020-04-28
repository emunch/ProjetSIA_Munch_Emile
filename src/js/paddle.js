function botIA(){
    if(ball.position.y < paddle2.position.y){
        paddle2.position.y -= paddle2DirY * paddle2Speed;
    }

    if(ball.position.y > paddle2.position.y){
        paddle2.position.y += paddle2DirY * paddle2Speed;
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