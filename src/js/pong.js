

  let container, w, h, scene, camera, controls, renderer, stats, ambientLight;
  let loop = {};
  var ball;
  var x = 0;
 var axis =
 [new THREE.Mesh(new THREE.CubeGeometry(10,0.2,0.2),new THREE.MeshBasicMaterial({color: "#5BAD46"})),
 new THREE.Mesh(new THREE.CubeGeometry(0.2,10,0.2), new THREE.MeshBasicMaterial({color:"#EE3A2F" })),
  new THREE.Mesh(new THREE.CubeGeometry(0.2,0.2,10),new THREE.MeshBasicMaterial({color:"#FFE560"}))]; //z



  window.addEventListener('load', go);
  window.addEventListener('resize', resize);

  function go() {
    console.log("Go!");
    init();
    gameLoop();
  }

  function init() {
    container = document.querySelector('#SIApp');
    w = container.clientWidth;
    h = container.clientHeight;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, w/h, 0.001, 100000);
    camera.position.set(30, 0, 10);
    camera.rotation.y = 30;
    //camera.lookAt(0,0,0);

    //controls.target = new THREE.Vector3(0, 0, 0.75);
    //controls.panSpeed = 0.4;

    const renderConfig = {antialias: true, alpha: true};
    renderer = new THREE.WebGLRenderer(renderConfig);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // add Stats.js - https://github.com/mrdoob/stats.js
    stats = new Stats();
    stats.domElement.style.position	= 'absolute';
    stats.domElement.style.bottom	= '0px';
    document.body.appendChild( stats.domElement );

    // add some geometries
    const geometry = new THREE.CubeGeometry(3,3,3);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //var material = new THREE.MashFaceMaterial(cubeMaterials);
    ball = new THREE.Mesh( geometry, material);
    scene.add(ball);

    //ajout de lumièreq
     ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.3)
    scene.add(ambientLight);

/*
    const fps  = 60;
    const slow = 1; // slow motion! 1: normal speed, 2: half speed...
    loop.dt       = 0,
    loop.now      = timestamp();
    loop.last     = loop.now;
    loop.fps      = fps;
    loop.step     = 1/loop.fps;
    loop.slow     = slow;
    loop.slowStep = loop.slow * loop.step;
*/
    initGui();
  }

  function gameLoop() {

      requestAnimationFrame(gameLoop);

      ball.position.x = Math.sin(x)*10;
      //ball.position.y = Math.cos(x)*10;
      x+= 0.01%360;
      renderer.render(scene,camera);

      controls.update();
/*
    // gestion de l'incrément du temps
    loop.now = timestamp();
    loop.dt = loop.dt + Math.min(1, (loop.now - loop.last) / 1000);
    while(loop.dt > loop.slowStep) {
      loop.dt = loop.dt - loop.slowStep;
      update(loop.step); // déplace les objets d'une fraction de seconde
    }
    renderer.render(scene, camera);  // rendu de la scène
    loop.last = loop.now;

    requestAnimationFrame(gameLoop); // relance la boucle du jeu

    controls.update();
    stats.update();

    */
  }

  function update(step) {
		const angleIncr = Math.PI * 2 * step / 5 ; // une rotation complète en 5 secondes
		torus.rotateY(angleIncr);
  }

  function resize() {
    w = container.clientWidth;
    h = container.clientHeight;
    camera.aspect = w/h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  function timestamp() {
    return window.performance.now();
  }
