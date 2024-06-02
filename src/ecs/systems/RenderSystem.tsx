import React from 'react';
import { useFrame } from '@react-three/fiber';
import Entity from '../entities/Entity';
import CubeComponent from '../components/CubeComponent';
import Hoverable from '../components/Hoverable';
import Clickable from '../components/Clickable';

const RenderSystem: React.FC<{ entities: Entity[] }> = ({ entities }) => {
  useFrame(() => {
    entities.forEach(entity => {
      const cubeComponent = entity.getComponent<CubeComponent>('cube');
      if (cubeComponent) {
        // Remove rotation logic
      }
    });
  });

  return (
    <>
      {entities.map(entity => {
        const cubeComponent = entity.getComponent<CubeComponent>('cube');
        if (cubeComponent) {
          return (
            <group key={entity.id}>
              {cubeComponent.planes.map((planeComponent, index) => (
                <Hoverable key={index} mesh={planeComponent.mesh}>
                  <Clickable mesh={planeComponent.mesh} />
                </Hoverable>
              ))}
            </group>
          );
        }
        return null;
      })}
    </>
  );
};

export default RenderSystem;
