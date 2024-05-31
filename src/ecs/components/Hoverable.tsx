import { ThreeEvent } from '@react-three/fiber';

export default class Hoverable {
  constructor(
    public onPointerOver: (event: ThreeEvent<PointerEvent>) => void,
    public onPointerOut: (event: ThreeEvent<PointerEvent>) => void
  ) {}
}
