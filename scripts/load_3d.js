import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
scene.add(ambientLight);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 5); // Bright white light
directionalLight1.position.set(5, 5, 5).normalize();
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 5); // Bright white light
directionalLight2.position.set(-5, -5, 5).normalize();
scene.add(directionalLight2);

// Add a light grey plane
const planeGeometry = new THREE.PlaneGeometry(20, 20); // Width and height of the plane
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide }); // Light grey color
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2;
plane.position.y = 0;
scene.add(plane);

// Load the GLTF model
const loader = new GLTFLoader();
loader.load(
    './scene.gltf', // Update the path to your model
    function (gltf) {
        scene.add(gltf.scene); // Add the loaded model to the scene

        // Adjust the camera position to view the model
        camera.position.set(5, 5, 5); // Adjust as needed
        camera.lookAt(0, 0, 0); // Look at the center of the scene
    },
    undefined, // Progress callback (optional)
    function (error) {
        console.error('Error loading GLTF model:', error);
    }
);

// Add OrbitControls for mouse-controlled camera
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Add smooth damping to the controls
controls.dampingFactor = 0.05; // Adjust damping strength
controls.screenSpacePanning = true; // Allow panning in screen space
controls.minDistance = 2; // Minimum zoom distance
controls.maxDistance = 20; // Maximum zoom distance

// Render loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update controls in the render loop
    renderer.render(scene, camera);
}
animate();