
  window.addEventListener('load', go);
  window.addEventListener('resize', resize);
  window.addEventListener('kepressed', function(evt){
      input(evt);
  });
  function go() {
    console.log("Go!");
    init();
    gameLoop();
    playerUI = document.getElementById("scoreP1");
    botUI = document.getElementById("scoreP2");
  }

  function init() {
    container = document.querySelector('#SIApp');
    w = container.clientWidth;
    h = container.clientHeight;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, w/h, 0.001, 100000);
    camera.position.set(0, 0, 250);


    const renderConfig = {antialias: true, alpha: true};
    renderer = new THREE.WebGLRenderer(renderConfig);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    //controls = new THREE.OrbitControls(camera, renderer.domElement);

    // add Stats.js - https://github.com/mrdoob/stats.js
    stats = new Stats();
    stats.domElement.style.position	= 'absolute';
    stats.domElement.style.bottom	= '0px';
    document.body.appendChild( stats.domElement );
    //add some geometries
    const geometry = new THREE.SphereGeometry(params.ballRadius,20,20);
    const material = new THREE.MeshLambertMaterial({ color: 0xD43001 });
    ball = new THREE.Mesh(geometry, material);
    ball.position.z = 5;
    scene.add(ball);


    // // create a point light
        pointLight = new THREE.PointLight(0xF8D898);

        // set its position
        pointLight.position.z = -1000;
        pointLight.position.z = 1000;
        pointLight.intensity = 2.9;
        pointLight.distance = 10000;

        // add to the scene
        scene.add(pointLight);
    //ajout de lumièreq
        ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.3)
        scene.add(ambientLight);
        addPlayingPlane();
        addPaddles();
        addWalls();



    const fps  = 60;
    const slow = 1; // slow motion! 1: normal speed, 2: half speed...
    loop.dt       = 0,
    loop.now      = timestamp();
    loop.last     = loop.now;
    loop.fps      = fps;
    loop.step     = 1/loop.fps;
    loop.slow     = slow;
    loop.slowStep = loop.slow * loop.step;

    initGui();
  }

  function gameLoop() {

      requestAnimationFrame(gameLoop);

      renderer.render(scene,camera);

      //controls.update();

    // gestion de l'incrément du temps
    loop.now = timestamp();
    loop.dt = loop.dt + Math.min(1, (loop.now - loop.last) / 1000);
    while(loop.dt > loop.slowStep) {
      loop.dt = loop.dt - loop.slowStep;
      if(isPlaying){
        ballPhysics(loop.step); // déplace les objets d'une fraction de seconde
      }

      camera.position.x = paddle1.position.x-50;
      camera.position.z = paddle1.position.z + 50;
      camera.rotation.z = -90*Math.PI/180;
      camera.rotation.y = -45*Math.PI/180;
    }
    renderer.render(scene, camera);  // rendu de la scène
    loop.last = loop.now;

    //requestAnimationFrame(gameLoop); // relance la boucle du jeu

    //controls.update();
    stats.update();
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
