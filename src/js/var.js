var container, w, h, scene, camera, controls, renderer, stats, ambientLight, origin;
var loop = {};
var ball;
var speedX = 1;
var speedY =1;
var speed = 2;
var axis =
[new THREE.Mesh(new THREE.CubeGeometry(10,0.2,0.2),new THREE.MeshBasicMaterial({color: "#5BAD46"})),
new THREE.Mesh(new THREE.CubeGeometry(0.2,10,0.2), new THREE.MeshBasicMaterial({color:"#EE3A2F" })),
new THREE.Mesh(new THREE.CubeGeometry(0.2,0.2,10),new THREE.MeshBasicMaterial({color:"#FFE560"}))]; //z

var collisions = []

//variables du terrain
var fieldWidth = 300;
var fieldHeight = 250;

//paddle variables
var paddle1, paddle2;
var paddleWidth = 10;
var paddleHeight = 50;
var paddleDepth = 10;
var paddleQuality = 1;
var paddle1DirY, paddle1Speed= 5, paddle1DirY = 1;

//valeurs ascii des touches
var Key = {
    _pressed: {},

    la:37,
    ra:39

};

var colided = false;
