import { Entity } from './Entity.js';

export class TrainStation extends Entity {
    constructor(id, trainId, stationId) {
        super(id);
        this.trainId = trainId;
        this.stationId = stationId;
    }

    describe() {
        return `Train ID: ${this.trainId} (Entity ID: ${this.getId()})\nStation ID: ${this.stationId}`;
    }
}
