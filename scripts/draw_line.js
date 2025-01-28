import * as THREE from 'three';


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 20, 20, 20 );
camera.lookAt( 0,0,0);

const scene = new THREE.Scene();

const materialx = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const pointsx = [];
pointsx.push( new THREE.Vector3( 0, 0, 0 ) );
pointsx.push( new THREE.Vector3( 10, 0, 0 ) );

const geometryx = new THREE.BufferGeometry().setFromPoints( pointsx );

const linex = new THREE.Line( geometryx, materialx );

// scene.add( linex );

const materialy = new THREE.LineBasicMaterial( { color: 0x00ff00 } );

const pointsy = [];
pointsy.push( new THREE.Vector3( 0, 0, 0 ) );
pointsy.push( new THREE.Vector3( 0, 10, 0 ) );


const geometryy = new THREE.BufferGeometry().setFromPoints( pointsy );

const liney = new THREE.Line( geometryy, materialy );

// scene.add( liney );

const materialz = new THREE.LineBasicMaterial( { color: 0xff0000 } );

const pointsz = [];
pointsz.push( new THREE.Vector3( 0, 0, 0 ) );
pointsz.push( new THREE.Vector3( 0, 0, 10 ) );

const geometryz = new THREE.BufferGeometry().setFromPoints( pointsz );

const linez = new THREE.Line( geometryz, materialz );

scene.add( linez , linex, liney );
renderer.render( scene, camera );