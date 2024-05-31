import React from "react";
import { useFrame } from "@react-three/fiber";
import Entity from "../entities/Entity";
import Position from "../components/Position";
import PlaneMesh from "../../components/PlaneMesh"; // React component for rendering planes

const RenderSystem: React.FC<{ entities: Entity[] }> = ({ entities }) => {
  useFrame(() => {
    // Update entity positions, etc. if needed
  });

  return (
    <>
      {entities.map((entity) => {
        const position = entity.getComponent<Position>("position");
        const mesh = entity.getComponent<PlaneMesh>("mesh"); // ECS component holding data

        return (
          <PlaneMesh
            key={entity.id}
            position={[position.x, position.y, position.z]}
            rotation={[0, 0, 0]}
            material={mesh.material}
          />
        );
      })}
    </>
  );
};

export default RenderSystem;
