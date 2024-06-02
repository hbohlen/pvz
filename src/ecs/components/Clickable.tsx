import * as THREE from 'three';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Clickable: React.FC<{ mesh: THREE.Mesh; children?: React.ReactNode }> = ({
  mesh,
  children,
}) => {
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (clicked) {
      (mesh.material as THREE.MeshBasicMaterial).color.set(0x0000ff);
    } else {
      (mesh.material as THREE.MeshBasicMaterial).color.set(0x00ff00);
    }
  });

  return (
    <>
      <primitive
        object={mesh}
        onClick={() => {
          setClicked(true);
          console.log('Cube clicked');
        }}
      />
      {children}
    </>
  );
};

export default Clickable;
