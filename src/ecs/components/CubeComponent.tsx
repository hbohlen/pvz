import * as THREE from 'three';
import PlaneComponent from './PlaneComponent';
import Clickable from './Clickable';

class CubeComponent {
  planes: PlaneComponent[];
  clickedStates: boolean[];

  constructor() {
    const halfSideLength = 2.5; // Half of the side length of the cube

    // Initialize six planes for the cube
    this.planes = [
      this.createPlane(0, 0, halfSideLength), // Front
      this.createPlane(0, 0, -halfSideLength), // Back
      this.createPlane(-halfSideLength, 0, 0), // Left
      this.createPlane(halfSideLength, 0, 0), // Right
      this.createPlane(0, halfSideLength, 0), // Top
      this.createPlane(0, -halfSideLength, 0), // Bottom
    ];
    this.clickedStates = new Array(this.planes.length).fill(false);
  }

  createPlane(x: number, y: number, z: number) {
    const planeComponent = new PlaneComponent();
    planeComponent.mesh.position.set(x, y, z); // Position the plane correctly

    // Rotate planes to form a cube
    if (x !== 0) {
      planeComponent.mesh.rotation.y = Math.PI / 2; // Rotate left and right planes
    } else if (y !== 0) {
      planeComponent.mesh.rotation.x = Math.PI / 2; // Rotate top and bottom planes
    }

    return planeComponent;
  }

  renderPlanes() {
    return this.planes.map((plane, index) => (
      <Clickable
        key={index}
        mesh={plane.mesh}
        clicked={this.clickedStates[index]}
        setClicked={value => (this.clickedStates[index] = value)}
      />
    ));
  }
}

export default CubeComponent;
