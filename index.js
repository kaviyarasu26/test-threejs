import {GLTFLoader} from './GLTFLoader.js'
import * as THREE from './three.module.js'
import {OrbitControls} from './OrbitControls.js'


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/innerHeight, 0.1 ,1000);

var renderer = new THREE.WebGL1Renderer({ antialias: true, physicallyCorrectLights: true, outputEncoding: THREE.sRGBEncoding, gammaOutput: true, gammaFactor: 2.2});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement)
//controls.enablePan = false
//controls.maxDistance = 75
//controls.minDistance = 8.2
//controls.enableDamping = false

var loader = new GLTFLoader();

  
loader.load('nasa.glb', function(gltf){
   gltf.scene;
   scene.add(gltf.scene);

});


scene.background = new THREE.Color(0x000000);
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(-100,10,50);
camera.position.set(0,0,10);
scene.add(light);











 




function onWindowResize() {
         
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
         
  }

//window.addEventListener('click', onClick);
window.addEventListener('resize', onWindowResize)

function animate(){

    window.requestAnimationFrame(animate);
    
    
    renderer.render(scene,camera);
}
animate();
