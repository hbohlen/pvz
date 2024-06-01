import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Entity from '@ecs/entities/Entity';
import PlaneComponent from '@ecs/components/PlaneComponent';
import { OrbitControls } from '@react-three/drei';
import '../styles/MainScene.css';

const MainScene: React.FC = () => {
  return (
    <Canvas className='canvas'>
      <SceneContent />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
    </Canvas>
  );
};

const SceneContent: React.FC = () => {
  const { camera, scene } = useThree();

  useEffect(() => {
    const entity = new Entity(1);
    const planeComponent = new PlaneComponent();
    entity.addComponent('plane', planeComponent);
    scene.add(planeComponent.mesh);

    camera.position.set(0, 5, 10);
    camera.lookAt(planeComponent.mesh.position);
  }, [camera, scene]);

  return null;
};

export default MainScene;
