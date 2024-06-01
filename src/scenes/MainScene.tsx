import React from 'react';
import { Canvas } from '@react-three/fiber';
import PlaneMesh from '../components/PlaneMesh';

const MainScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 7, 15], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <PlaneMesh />
    </Canvas>
  );
};

export default MainScene;
