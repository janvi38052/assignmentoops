import { Entity } from './Entity.js';

export class Train extends Entity {
    constructor(id, trainId, seatAvailable, source, destination, startTime) {
        super(id);
        this.trainId = trainId;
        this.seatAvailable = seatAvailable;
        this.source = source;
        this.destination = destination;
        this.startTime = startTime;
    }

    describe() {
        return `Train ID: ${this.trainId} (Entity ID: ${this.getId()})\nSeats Available: ${this.seatAvailable}\nRoute: ${this.source} to ${this.destination}\nDeparture Time: ${this.startTime} o'clock`;
    }
}
