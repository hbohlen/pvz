type Component = any; // Define a proper type for components

class Entity {
  id: number;
  components: Map<string, Component>;

  constructor(id: number) {
    this.id = id;
    this.components = new Map();
  }

  addComponent(name: string, component: Component) {
    this.components.set(name, component);
    return this;
  }

  getComponent<T extends Component>(name: string): T | undefined {
    return this.components.get(name) as T;
  }
}

export default Entity;
