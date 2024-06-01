import Position from '../components/Position';

// Entity class represents an entity in the ECS (Entity-Component-System) architecture
class Entity {
  // Unique identifier for the entity
  id: number;
  // Map to store components associated with the entity
  components: Map<string, any>;

  // Constructor to initialize the entity with a unique ID
  constructor(id: number) {
    this.id = id;
    this.components = new Map();
  }

  // Method to add a component to the entity
  // name: The name of the component
  // component: The component instance to be added
  addComponent(name: string, component: any) {
    this.components.set(name, component);
  }

  // Method to retrieve a component from the entity
  // name: The name of the component to retrieve
  // Returns the component instance if found, otherwise undefined
  getComponent<T>(name: string): T {
    return this.components.get(name);
  }
}

export default Entity;
