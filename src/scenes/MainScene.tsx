import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Entity from '@ecs/entities/Entity';
import PlaneComponent from '@ecs/components/PlaneComponent';
import { OrbitControls } from '@react-three/drei';
import '../styles/MainScene.css';

// MainScene component sets up the 3D canvas and scene content
const MainScene: React.FC = () => {
  return (
    <Canvas className='canvas'>
      {/* SceneContent initializes 3D objects and camera */}
      <SceneContent />
      {/* Adds ambient light to the scene */}
      <ambientLight />
      {/* Adds a point light at the specified position */}
      <pointLight position={[10, 10, 10]} />
      {/* Adds orbit controls to allow camera movement */}
      <OrbitControls />
    </Canvas>
  );
};

// SceneContent component initializes the 3D objects and camera
const SceneContent: React.FC = () => {
  // useThree hook provides access to the Three.js scene and camera
  const { camera, scene } = useThree();

  useEffect(() => {
    // Create a new entity with an ID of 1
    const entity = new Entity(1);
    // Create a new PlaneComponent
    const planeComponent = new PlaneComponent();
    // Add the PlaneComponent to the entity
    entity.addComponent('plane', planeComponent);
    // Add the plane's mesh to the scene
    scene.add(planeComponent.mesh);

    // Position the camera and make it look at the plane
    camera.position.set(0, 5, 10);
    camera.lookAt(planeComponent.mesh.position);
  }, [camera, scene]);

  return null; // No visual output from this component
};

export default MainScene;
