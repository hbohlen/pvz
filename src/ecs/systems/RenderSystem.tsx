import React from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import Entity from '../entities/Entity';
import Position from '../components/Position';
import MeshComponent from '../components/MeshComponent';
import Clickable from '../components/Clickable';
import Hoverable from '../components/Hoverable';

const RenderSystem: React.FC<{
  entities: Entity[];
  hoveredId: number | null;
}> = ({ entities, hoveredId }) => {
  useFrame(() => {
    // Update entity positions, etc. if needed
  });

  return (
    <>
      {entities.map(entity => {
        const position = entity.getComponent<Position>('position');
        const mesh = entity.getComponent<MeshComponent>('mesh');
        const clickable = entity.getComponent<Clickable>('clickable');
        const hoverable = entity.getComponent<Hoverable>('hoverable');
        const isHovered = entity.id === hoveredId;

        return (
          <mesh
            key={entity.id}
            position={[position.x, position.y, position.z]}
            onClick={() => clickable.onClick(entity.id)}
            onPointerOver={(event: ThreeEvent<PointerEvent>) =>
              hoverable.onPointerOver(event)
            }
            onPointerOut={(event: ThreeEvent<PointerEvent>) =>
              hoverable.onPointerOut(event)
            }
          >
            <boxGeometry args={mesh.geometry} />
            <meshStandardMaterial
              color={isHovered ? 'orange' : mesh.material.color}
            />
          </mesh>
        );
      })}
    </>
  );
};

export default RenderSystem;
