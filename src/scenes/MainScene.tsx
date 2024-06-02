import React, { useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three'; // Ensure THREE is imported
import Entity from '@ecs/entities/Entity';
import CubeComponent from '@ecs/components/CubeComponent';
import { OrbitControls } from '@react-three/drei';
import '../styles/MainScene.css';
import RenderSystem from '@ecs/systems/RenderSystem';

// MainScene component sets up the 3D canvas and scene content
const MainScene: React.FC = () => {
  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    const newEntities: Entity[] = [];

    // First cube
    const entity1 = new Entity(1);
    const cubeComponent1 = new CubeComponent();
    entity1.addComponent('cube', cubeComponent1);
    newEntities.push(entity1);

    // Second cube
    const entity2 = new Entity(2);
    const cubeComponent2 = new CubeComponent();
    entity2.addComponent('cube', cubeComponent2);
    newEntities.push(entity2);
    setEntities(newEntities);
  }, []);

  return (
    <Canvas className='canvas'>
      <SceneContent entities={entities} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
    </Canvas>
  );
};

// SceneContent component initializes the 3D objects and camera
const SceneContent: React.FC<{ entities: Entity[] }> = ({ entities }) => {
  const { camera, scene } = useThree();

  useEffect(() => {
    if (entities.length > 0) {
      entities.forEach((entity, index) => {
        const cubeComponent = entity.getComponent<CubeComponent>('cube');
        if (cubeComponent) {
          cubeComponent.planes.forEach(planeComponent => {
            scene.add(planeComponent.mesh);
          });
          // Position the second cube to the right of the first cube
          if (index === 1) {
            cubeComponent.planes.forEach(planeComponent => {
              planeComponent.mesh.position.x += 5; // Adjust based on cube size
            });
          }
        }
      });
      camera.position.set(0, 10, 20);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
    }
  }, [camera, scene, entities]);

  return <RenderSystem entities={entities} />;
};

export default MainScene;
