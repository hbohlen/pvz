import Position from '../components/Position';

class Entity {
  id: number;
  components: Map<string, any>;

  constructor(id: number) {
    this.id = id;
    this.components = new Map();
  }

  addComponent(name: string, component: any) {
    this.components.set(name, component);
  }

  getComponent<T>(name: string): T {
    return this.components.get(name);
  }
}

export default Entity;
