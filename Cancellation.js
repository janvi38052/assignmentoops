import { Entity } from './Entity.js';

export class Cancellation extends Entity {
    constructor(id, cancellationId, ticketId, cancellationDate, reason) {
        super(id);
        this.cancellationId = cancellationId;
        this.ticketId = ticketId;
        this.cancellationDate = cancellationDate;
        this.reason = reason;
    }

    describe() {
        return `Cancellation ID: ${this.cancellationId} (Entity ID: ${this.getId()})\nTicket ID: ${this.ticketId}\nCancellation Date: ${this.cancellationDate}\nReason: ${this.reason}`;
    }
}
