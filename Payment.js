import { Entity } from './Entity.js';

export class Payment extends Entity {
    constructor(id, paymentId, paymentMethod, amount, ticketId) {
        super(id);
        this.paymentId = paymentId;
        this.paymentMethod = paymentMethod;
        this.amount = amount;
        this.ticketId = ticketId;
    }

    describe() {
        return `Payment ID: ${this.paymentId} (Entity ID: ${this.getId()})\nAmount: ${this.amount}\nMethod: ${this.paymentMethod}\nTicket ID: ${this.ticketId}`;
    }
}
