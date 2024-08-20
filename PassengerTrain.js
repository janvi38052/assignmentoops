import { Entity } from './Entity.js';

export class PassengerTrain extends Entity {
    constructor(id, passengerId, trainId) {
        super(id);
        this.passengerId = passengerId;
        this.trainId = trainId;
    }

    describe() {
        return `Passenger ID: ${this.passengerId} (Entity ID: ${this.getId()})\nTrain ID: ${this.trainId}`;
    }
}
