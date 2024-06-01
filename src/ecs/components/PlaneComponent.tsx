import * as THREE from 'three';

class PlaneComponent {
  // The mesh property will hold the 3D object that represents the plane
  mesh: THREE.Mesh;

  constructor() {
    // Create a plane geometry with width and height of 5 units
    const geometry = new THREE.PlaneGeometry(5, 5);

    // Create a basic material with green color and double-sided rendering
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00, // Green color
      side: THREE.DoubleSide, // Render both sides of the plane
    });

    // Create a mesh from the geometry and material
    this.mesh = new THREE.Mesh(geometry, material);
  }
}

export default PlaneComponent;
