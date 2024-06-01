import * as THREE from 'three';
import PlaneComponent from './PlaneComponent';

class CubeComponent {
  planes: PlaneComponent[];

  constructor() {
    const halfSideLength = 2.5; // Half of the side length of the cube

    // Initialize six planes for the cube
    this.planes = [
      this.createPlane(0, 0, halfSideLength, [0, 0, 0]), // Front
      this.createPlane(0, 0, -halfSideLength, [0, Math.PI, 0]), // Back
      this.createPlane(-halfSideLength, 0, 0, [0, -Math.PI / 2, 0]), // Left
      this.createPlane(halfSideLength, 0, 0, [0, Math.PI / 2, 0]), // Right
      this.createPlane(0, halfSideLength, 0, [-Math.PI / 2, 0, 0]), // Top
      this.createPlane(0, -halfSideLength, 0, [Math.PI / 2, 0, 0]), // Bottom
    ];
  }

  createPlane(
    x: number,
    y: number,
    z: number,
    rotation: [number, number, number]
  ) {
    const planeComponent = new PlaneComponent();
    planeComponent.mesh.position.set(x, y, z); // Position the plane correctly
    planeComponent.mesh.rotation.set(rotation[0], rotation[1], rotation[2]); // Set rotation
    return planeComponent;
  }
}

export default CubeComponent;
