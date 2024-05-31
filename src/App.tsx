import React from 'react';
import { Canvas } from '@react-three/fiber';
import MainScene from './scenes/MainScene';

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [15, 20, 15], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <MainScene />
      </Canvas>
    </div>
  );
};

export default App;
