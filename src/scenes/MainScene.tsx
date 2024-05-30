import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import RenderSystem from '../ecs/systems/RenderSystem';
import Entity from '../ecs/entities/Entity';
import Position from '../ecs/components/Position';
import MeshComponent from '../ecs/components/MeshComponent';

const MainScene: React.FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Set camera position
    camera.position.set(0, 5, 10);
    // Set camera rotation to look down at the cube
    camera.lookAt(0, 0, 0);
  }, [camera]);

  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    const cube = new Entity(1);
    cube.addComponent('position', new Position(0, 0, 0));
    cube.addComponent(
      'mesh',
      new MeshComponent([1, 1, 1], { color: 'orange' })
    );
    setEntities([cube]);
  }, []);

  return <RenderSystem entities={entities} />;
};

export default MainScene;
