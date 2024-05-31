import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";

const MainScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 7, 15], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
    </Canvas>
  );
};

export default MainScene;
