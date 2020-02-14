var devMode = false;
var gui;

var params = {
    axis_visible : false,
    speed: 2,
    ballRadius: 5
};

document.addEventListener('keydown', function (event){
    input(event);
});


function initGui(){
    var gui = new dat.GUI();
    gui.add(params, 'axis_visible').onChange(toggleAxis);
    gui.add(params, 'speed').min(0).step(0.1).onChange(upX);
    gui.add(params, 'ballRadius').min(0).step(0.1).onChange(updateRadius)
}

function input(evt){
        switch(event.keyCode){
            case 68:
                console.log("d a été pressé");
                devMode = ! devMode
                toggleDevMode();
                break;
        }
}

function toggleAxis(){
    if (params.axis_visible){
        for(i = 0 ; i < axis.length; i++){
            scene.add(axis[i]);
        }
    }else{
        for( i = 0; i < axis.length; i++){
            scene.remove(axis[i]);
        }
    }
}


function updateRadius(){
    let x = ball.position.x;
    let y = ball.position.y;
    let z = ball.position.z;
    let mat = ball.material;

    scene.remove(ball);
    let geometry = new THREE.SphereGeometry(params.ballRadius, 20,20);
    ball = new THREE.Mesh(geometry, mat);
    ball.position.x = x;
    ball.position.y = y;
    ball.position.z = z;
    scene.add(ball);
}


function upX(){
    speed = params.speed;
}
