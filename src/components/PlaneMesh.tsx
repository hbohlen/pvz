import React from "react";

const PlaneMesh: React.FC<{
  position: [number, number, number];
  rotation: [number, number, number];
  material: any;
}> = ({ position, rotation, material }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial {...material} />
    </mesh>
  );
};

export default PlaneMesh;
