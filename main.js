import { addLight } from './addLights';
import { addBoilerPlateMesh, addStandardMesh, addMesh1} from './addMeshes';
import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene();
const renderer = new THREE.WebGL1Renderer({antialias: true});
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.set(0, 0, 5);
const meshes = {};

init();


function init(){
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //const geometry = new THREE.BoxGeometry(1,1,1);
  //const material = new THREE.MeshBasicMaterial({color: '0xff0000'});
  //const mesh = new THREE.Mesh(geometry, material);
  //mesh.position.set(0, 0, -5);
  //meshes.default = mesh;

  meshes.default = addBoilerPlateMesh();
  meshes.standard = addStandardMesh();
  meshes.shape1 = addMesh1();

  meshes.defaultLight = addLight();

  scene.add(meshes.default);
  scene.add(meshes.standard);
  scene.add(meshes.shape1);
  scene.add(meshes.defaultLight);
  resize();
  animate();
}
function resize(){
  window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updatePorjectionMatrix();
  }
  );
}

function animate(){
  //meshes.default.position.x += 0.01;
  requestAnimationFrame(animate);
  //enderer.render(scene, camera);
  meshes.standard.rotation.x += 0.01;
  meshes.standard.rotation.z += 0.01;

  meshes.default.rotation.x += 0.02;
  meshes.default.rotation.z += 0.01;

  meshes.shape1.rotation.x += 0.02;
  renderer.render(scene, camera);
}