import * as THREE from 'three';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Hoverable: React.FC<{ mesh: THREE.Mesh }> = ({ mesh }) => {
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (hovered) {
      (mesh.material as THREE.MeshBasicMaterial).color.set(0xff0000);
    } else {
      (mesh.material as THREE.MeshBasicMaterial).color.set(0x00ff00);
    }
  });

  return (
    <primitive
      object={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};

export default Hoverable;
