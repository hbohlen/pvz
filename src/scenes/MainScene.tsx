import React, { useEffect, useState } from 'react';
import RenderSystem from '../ecs/systems/RenderSystem';
import Entity from '../ecs/entities/Entity';
import Position from '../ecs/components/Position';
import MeshComponent from '../ecs/components/MeshComponent';

const MainScene: React.FC = () => {
  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    const cube = new Entity(1);
    cube.addComponent('position', new Position(0, 0, 0));
    cube.addComponent(
      'mesh',
      new MeshComponent([1, 1, 1], { color: 'orange' })
    );
    setEntities([cube]);
  }, []);

  return <RenderSystem entities={entities} />;
};

export default MainScene;
