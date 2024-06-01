import * as THREE from 'three';

class PlaneComponent {
  mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.PlaneGeometry(5, 5); // Plane size matches the cube's side length
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geometry, material);
  }
}

export default PlaneComponent;
