import { Entity } from './Entity.js';

export class PassengerStation extends Entity {
    constructor(id, passengerId, stationId) {
        super(id);
        this.passengerId = passengerId;
        this.stationId = stationId;
    }

    describe() {
        return `Passenger ID: ${this.passengerId} (Entity ID: ${this.getId()})\nStation ID: ${this.stationId}`;
    }
}
