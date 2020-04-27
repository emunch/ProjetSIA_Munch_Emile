var maxLevel = 10;
var playerH = 3, botH = 3;
var keyboard;

var container, w, h, scene, camera, controls, renderer, stats, ambientLight, origin;
var loop = {};
var ball;
var speedX = 0.5;
var speedY =0.5;
var speed = 4;
var axis =
[new THREE.Mesh(new THREE.CubeGeometry(10,0.2,0.2),new THREE.MeshBasicMaterial({color: "#5BAD46"})),
new THREE.Mesh(new THREE.CubeGeometry(0.2,10,0.2), new THREE.MeshBasicMaterial({color:"#EE3A2F" })),
new THREE.Mesh(new THREE.CubeGeometry(0.2,0.2,10),new THREE.MeshBasicMaterial({color:"#FFE560"}))]; //z

var collisions = []

//variables du terrain
var fieldWidth = 200;
var fieldHeight = 100;

//paddle variables
var paddle1, paddle2;
var paddleWidth = 10;
var paddleHeight = 50;
var paddleDepth = 10;
var paddleQuality = 1;
var  paddle1Speed= 2, paddle1DirY = 1;
var  paddle2Speed= 2, paddle2DirY = 1;


var walls = [];
var plane;

var Key = {
    j: 74,
    i:73,
    space:32, 
    k:75, 
    f:70,
    d1: 49,
    d2: 50
};
var colided = false;

var ah

var intersection;

var ray3;

var level = 1;

var player, bot;

var invincible = false;
var isPlaying = false;
var fc = false;

var playerUI, botUI;
var currBonus = -1;
var timer;
var bonuses  = {
    ENEMY_LARGE:0,
    SELF_LARGE:1,
    ENEMY_HEAL:2,
    SELF_HEAL:3,
    DA_WALL:4,
    SELF_STOP:5,
    ENEMY_STOP:6,
    ZA_WARUDO:7
};
var cameras1, cameras2, camera;
var cameras = []