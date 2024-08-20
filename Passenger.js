import { Entity } from './Entity.js';

export class Passenger extends Entity {
    constructor(id, passengerId, name, address) {
        super(id);
        this.passengerId = passengerId;
        this.name = name;
        this.address = address;
    }

    describe() {
        return `Passenger ID: ${this.passengerId} (Entity ID: ${this.getId()})\nName: ${this.name}\nAddress: ${this.address}\nWishing you a pleasant journey!`;
    }
}
