var container, w, h, scene, camera, controls, renderer, stats, ambientLight;
var loop = {};
var ball;
var speedX = params.speedX;
var speedY = params.speedY;
var axis =
[new THREE.Mesh(new THREE.CubeGeometry(10,0.2,0.2),new THREE.MeshBasicMaterial({color: "#5BAD46"})),
new THREE.Mesh(new THREE.CubeGeometry(0.2,10,0.2), new THREE.MeshBasicMaterial({color:"#EE3A2F" })),
new THREE.Mesh(new THREE.CubeGeometry(0.2,0.2,10),new THREE.MeshBasicMaterial({color:"#FFE560"}))]; //z

//variables du terrain
var fieldWidth = 300;
var fieldHeight = 250;

//paddle variables
var paddle1, paddle2;
var paddleWidth = 10;
var paddleHeight = 30;
var paddleDepth = 10;
var paddleQuality = 1;
