// Ticket.js
import { Entity } from './Entity.js'; // Import the Entity class

export class Ticket extends Entity {
    constructor(id, passengerId, trainId, start_time, source, destination, amount, no_of_seats) {
        super(id); // Call the constructor of the parent class
        this.passengerId = passengerId;
        this.trainId = trainId;
        this.start_time = start_time;
        this.source = source;
        this.destination = destination;
        this.amount = amount;
        this.no_of_seats = no_of_seats;
    }

    showDetails() {
        return `Ticket ID: ${this.getId()}. You have a seat booked from ${this.source} to ${this.destination} on Train ${this.trainId} at ${this.start_time}. Total amount: $${this.amount}`;
    }
}
