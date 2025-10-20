import * as THREE from 'https://unpkg.com/three@0.158.0/build/three.module.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Particle geometry
const particles = new THREE.BufferGeometry();
const particleCount = 1000;
const positions = [];

for (let i = 0; i < particleCount; i++) {
  positions.push((Math.random() - 0.5) * 20);
  positions.push((Math.random() - 0.5) * 20);
  positions.push((Math.random() - 0.5) * 20);
}

particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.05,
  transparent: true,
  opacity: 0.6,
});

const pointCloud = new THREE.Points(particles, material);
scene.add(pointCloud);

// Color animation
const colorShift = { h: 0 };

function animate() {
  requestAnimationFrame(animate);
  pointCloud.rotation.y += 0.0008;
  pointCloud.rotation.x += 0.0003;

  colorShift.h += 0.1;
  const h = (colorShift.h % 360) / 360;
  material.color.setHSL(h, 0.5, 0.6);

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

