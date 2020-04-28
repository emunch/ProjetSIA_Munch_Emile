var sky1 = "../medias/images/skyBox/envmap_grimmnight/"
var sky2 = "../medias/images/skyBox/envmap_interstellar/"
var sky3 = "../medias/images/skyBox/envmap_stormydays/"
var sky4 = "../medias/images/skyBox/envmap_violentdays/"
var format = ".png";
var skyboxes = []
//    px (positive x) : right
//nx (negative x) : left
//py (positive y) : top
//ny (negative y) : bottom
//pz (positive z) : back
//nz (negative z) : front
var s1Url = [sky1+'px'+format, sky1+'nx'+format,
             sky1+'py'+format, sky1+'ny.jpg'
            , sky1+'pz'+format, sky1+'nz'+format];

var s2Url = [sky2+'rt'+format, sky2+'lf'+format,
             sky2+'dn'+format, sky2+'up'+format
            , sky2+'bk'+format, sky2+'ft'+format];

var s3Url = [sky3+'rt'+format, sky3+'lf'+format,
sky3+'dn'+format, sky3+'up'+format
, sky3+'bk'+format, sky3+'ft'+format];


var s4Url = [sky4+'rt'+format, sky4+'lf'+format,
             sky4+'dn'+format, sky4+'up'+format
            , sky4+'bk'+format, sky4+'ft'+format];

function init_skybox(){
    skyboxes.push(s1Url);
    skyboxes.push(s2Url);
    skyboxes.push(s3Url);
    skyboxes.push(s4Url);
    display_SB();
}


function display_SB(){
    var sb = Math.trunc(Math.random()*4);
    let wallGeometry = new THREE.BoxBufferGeometry(400,400, 400);
    let faceMaterial = [
        new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(skyboxes[sb][0]), transparent: true, opacity: 1.0, side: THREE.BackSide}),// LEFT
        new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(skyboxes[sb][1]), transparent: true, opacity: 1.0, side: THREE.BackSide}),// RIGHT
        new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(skyboxes[sb][2]), transparent: true, opacity: 1.0, side: THREE.BackSide}),// BACK
        new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(skyboxes[sb][3]), transparent: true, opacity: 1.0, side: THREE.BackSide}),// FRONT
        new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(skyboxes[sb][4]), transparent: true, opacity: 1.0, side: THREE.BackSide}),// TOP
        new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(skyboxes[sb][5]), transparent: true, opacity: 1.0, side: THREE.BackSide})// BOTTOM
    ]  ;
    let material = new THREE.MeshFaceMaterial(faceMaterial);
    skybox = new THREE.Mesh(wallGeometry, material);
    skybox.rotateX(THREE.Math.degToRad(90));
    scene.add(skybox);
}