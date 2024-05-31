import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import RenderSystem from '../ecs/systems/RenderSystem';
import Entity from '../ecs/entities/Entity';
import Position from '../ecs/components/Position';
import MeshComponent from '../ecs/components/MeshComponent';

const MainScene: React.FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Set camera position to give a bleacher-like view
    camera.position.set(0, 7, 15);
    // Set camera rotation to look down at the center of the grid
    camera.lookAt(0, 0, 0);
  }, [camera]);

  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    const newEntities: Entity[] = [];
    const gridWidth = 9;
    const gridLength = 6;
    const cubeSize = 1; // Slightly larger than 1 to avoid overlap

    // Calculate the center offset
    const offsetX = ((gridWidth - 1) * cubeSize) / 2;
    const offsetZ = ((gridLength - 1) * cubeSize) / 2;

    for (let x = 0; x < gridWidth; x++) {
      for (let z = 0; z < gridLength; z++) {
        const cube = new Entity(x * gridLength + z);
        const color = (x + z) % 2 === 0 ? '#00ff00' : '#007700';
        cube.addComponent(
          'position',
          new Position(x * cubeSize - offsetX, 0, z * cubeSize - offsetZ)
        );
        cube.addComponent('mesh', new MeshComponent([1, 1, 1], { color }));
        newEntities.push(cube);
      }
    }

    setEntities(newEntities);
  }, []);

  return <RenderSystem entities={entities} />;
};

export default MainScene;
