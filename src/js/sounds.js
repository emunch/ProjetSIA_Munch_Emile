
var sound;
var boing;
var za_warudo;
var yareyaredaze;
var ohno;


function play_music(){
    var listener = new THREE.AudioListener();
    camera.add( listener );
    // create a global audio source
    sound = new THREE.Audio( listener );
    // load a sound and set it as the Audio object's buffer
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load( './src/medias/sounds/boss.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( true );
        sound.setVolume( 0.1 );
        sound.play();
    });


    // create a global audio source
    za_warudo = new THREE.Audio( listener );

    // load a sound and set it as the Audio object's buffer
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load( './src/medias/sounds/za-warudo.mp3', function( buffer ) {
        za_warudo.setBuffer( buffer );
        za_warudo.setLoop( false );
        za_warudo.setVolume( 0.2 );
    });

    yareyaredaze = new THREE.Audio( listener );

    // load a sound and set it as the Audio object's buffer
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load( './src/medias/sounds/yare-yare-daze.mp3', function( buffer ) {
        yareyaredaze.setBuffer( buffer );
        yareyaredaze.setLoop( false );
        yareyaredaze.setVolume( 0.2 );
    });


    ohno = new THREE.Audio( listener );

    // load a sound and set it as the Audio object's buffer
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load( './src/medias/sounds/ohno.mp3', function( buffer ) {
        ohno.setBuffer( buffer );
        ohno.setLoop( false );
        ohno.setVolume( 0.6 );
    });
}

function toggle_music(){
    if(play){
        play = false;
        sound.pause();
    }else{
        play = true;
        sound.play();
    }
}

 function bounce(){
    var listener = new THREE.AudioListener();
    camera.add( listener );

    // create a global audio source
    boing = new THREE.Audio( listener );

    // load a sound and set it as the Audio object's buffer
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load( './src/medias/sounds/bounce.mp3', function( buffer ) {
        boing.setBuffer( buffer );
        boing.setLoop( false );
        boing.setVolume( 0.2 );
        boing.play()
    });
 }