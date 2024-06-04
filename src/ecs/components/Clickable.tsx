import * as THREE from 'three';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Clickable: React.FC<{
  mesh: THREE.Mesh;
  clicked: boolean;
  setClicked: (value: boolean) => void;
  children?: React.ReactNode;
}> = ({ mesh, clicked, setClicked, children }) => {
  useFrame(() => {
    if (clicked) {
      (mesh.material as THREE.MeshBasicMaterial).color.set(0x0000ff);
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
