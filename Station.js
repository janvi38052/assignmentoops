// Station.js
import { Entity } from './Entity.js'; // Import the Entity class

export class Station extends Entity {
    constructor(id, stationId, name) {
        super(id); // Call the constructor of the parent class
        this.stationId = stationId;
        this.name = name;
    }

    describe() {
        return `Station ID: ${this.stationId} (Entity ID: ${this.getId()})Name: ${this.name}`;
    }
}
