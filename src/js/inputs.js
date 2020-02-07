var devMode = false;
var gui;

var params = {
    axis_visible : false
};

document.addEventListener('keydown', function (event){
    input(event);
});


function initGui(){
    var gui = new dat.GUI();
    gui.add(params, 'axis_visible').onChange(toggleAxis);
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