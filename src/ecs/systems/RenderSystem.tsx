import React from 'react';
import { useFrame } from '@react-three/fiber';
import Entity from '../entities/Entity';
import CubeComponent from '../components/CubeComponent';

const RenderSystem: React.FC<{ entities: Entity[] }> = ({ entities }) => {
  useFrame(() => {
    // Update entity positions, etc. if needed
  });

  return (
    <>
      {entities.map(entity => {
        const cubeComponent = entity.getComponent<CubeComponent>('cube');
        if (cubeComponent) {
          return (
            <group key={entity.id}>
              {cubeComponent.planes.map((planeComponent, index) => (
                <primitive key={index} object={planeComponent.mesh} />
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
