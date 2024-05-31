import { ThreeEvent } from '@react-three/fiber';

export const isTopFace = (event: ThreeEvent<PointerEvent>) => {
  if (event.face) {
    return event.face.normal.y === 1;
  }
  return false;
};
