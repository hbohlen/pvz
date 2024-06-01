import React from 'react';

const PlaneMesh: React.FC = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry attach='geometry' args={[10, 10]} />
      <meshStandardMaterial attach='material' color='lightblue' />
    </mesh>
  );
};

export default PlaneMesh;
