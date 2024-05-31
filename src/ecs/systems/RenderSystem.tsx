import React from 'react';
import { useFrame } from '@react-three/fiber';
import Entity from '../entities/Entity';
import Position from '../components/Position';
import MeshComponent from '../components/MeshComponent';

const RenderSystem: React.FC<{ entities: Entity[] }> = ({ entities }) => {
  useFrame(() => {
    // Update entity positions, etc. if needed
  });

  return (
    <>
      {entities.map(entity => {
        const position = entity.getComponent<Position>('position');
        const mesh = entity.getComponent<MeshComponent>('mesh');
        return (
          <mesh key={entity.id} position={[position.x, position.y, position.z]}>
            <boxGeometry args={mesh.geometry} />
            <meshStandardMaterial color={mesh.material.color} />
          </mesh>
        );
      })}
    </>
  );
};

export default RenderSystem;
