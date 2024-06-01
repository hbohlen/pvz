import React from 'react';
import { useFrame } from '@react-three/fiber';
import Entity from '../entities/Entity';
import PlaneComponent from '../../components/PlaneComponent'; // Make sure this path is correct

const RenderSystem: React.FC<{ entities: Entity[] }> = ({ entities }) => {
  useFrame(() => {
    // Update entity positions, etc. if needed
  });

  return (
    <>
      {entities.map(entity => {
        const plane = entity.getComponent<PlaneComponent>('plane');
        if (plane) {
          return (
            <primitive
              key={entity.id}
              object={plane.mesh}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export default RenderSystem;
