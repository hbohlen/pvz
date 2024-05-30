import React from 'react';
import { Canvas } from '@react-three/fiber';
import MainScene from './scenes/MainScene';

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <MainScene />
      </Canvas>
    </div>
  );
};

export default App;
