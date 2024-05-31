import React, { useEffect, useState } from 'react';
import { useThree, ThreeEvent } from '@react-three/fiber';
import RenderSystem from '../ecs/systems/RenderSystem';
import Entity from '../ecs/entities/Entity';
import Position from '../ecs/components/Position';
import MeshComponent from '../ecs/components/MeshComponent';
import Clickable from '../ecs/components/Clickable';
import Hoverable from '../ecs/components/Hoverable';

const MainScene: React.FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Set camera position to give a bleacher-like view
    camera.position.set(0, 7, 15);
    // Set camera rotation to look down at the center of the grid
    camera.lookAt(0, 0, 0);
  }, [camera]);

  const [entities, setEntities] = useState<Entity[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const newEntities: Entity[] = [];
    const gridWidth = 9;
    const gridLength = 6;
    const cubeSize = 1; // Set cubeSize to match the actual size of the cubes

    // Calculate the center offset
    const offsetX = ((gridWidth - 1) * cubeSize) / 2;
    const offsetZ = ((gridLength - 1) * cubeSize) / 2;

    for (let x = 0; x < gridWidth; x++) {
      for (let z = 0; z < gridLength; z++) {
        const id = x * gridLength + z;
        const cube = new Entity(id);
        const color = (x + z) % 2 === 0 ? '#00ff00' : '#007700'; // Alternate colors
        cube.addComponent(
          'position',
          new Position(x * cubeSize - offsetX, 0, z * cubeSize - offsetZ)
        );
        cube.addComponent('mesh', new MeshComponent([1, 1, 1], { color }));
        cube.addComponent(
          'clickable',
          new Clickable((entityId: number) => {
            console.log(`Cube ${entityId} clicked!`);
            // Handle click logic here
          })
        );
        cube.addComponent(
          'hoverable',
          new Hoverable(
            () => {
              setHoveredId(id);
            },
            () => {
              setHoveredId(null);
            }
          )
        );
        newEntities.push(cube);
      }
    }

    setEntities(newEntities);
  }, []);

  return <RenderSystem entities={entities} hoveredId={hoveredId} />;
};

export default MainScene;
