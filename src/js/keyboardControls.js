
function input(e){
    console.log(e.keyCode);
    switch(e.keyCode){
        case Key.la:
        //touche gauche pressée
        if(paddle1.position.y+paddleHeight/2 < fieldHeight/2){
            paddle1.position.y += paddle1DirY * paddle1Speed;
        }


        break;

        case Key.ra:

        if(paddle1.position.y-paddleHeight/2 > -fieldHeight/2){
            paddle1.position.y -= paddle1DirY*paddle1Speed;
        }
        break;

        default:
            console.log("je sais pas frere "   + e.code);
        break;
    }
}
