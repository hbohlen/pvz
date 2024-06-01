import React, { useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import Entity from '@ecs/entities/Entity';
import PlaneComponent from '@ecs/components/PlaneComponent';
import { OrbitControls } from '@react-three/drei';
import '../styles/MainScene.css';
import RenderSystem from '@ecs/systems/RenderSystem';

// MainScene component sets up the 3D canvas and scene content
const MainScene: React.FC = () => {
  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    const newEntities: Entity[] = [];
    const entity = new Entity(1);
    const planeComponent = new PlaneComponent();
    entity.addComponent('plane', planeComponent);
    newEntities.push(entity);
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
      const entity = entities[0];
      const planeComponent = entity.getComponent<PlaneComponent>('plane');
      if (planeComponent) {
        scene.add(planeComponent.mesh);
        camera.position.set(0, 5, 10);
        camera.lookAt(planeComponent.mesh.position);
      }
    }
  }, [camera, scene, entities]);

  return <RenderSystem entities={entities} />;
};

export default MainScene;
