import { Entity } from './Entity.js';

export class Booking extends Entity {
    constructor(id, bookingId, passengerId, trainId, bookingDate, numberOfSeats) {
        super(id);
        this.bookingId = bookingId;
        this.passengerId = passengerId;
        this.trainId = trainId;
        this.bookingDate = bookingDate;
        this.numberOfSeats = numberOfSeats;
    }

    describe() {
        return `Booking ID: ${this.bookingId} (Entity ID: ${this.getId()})\nPassenger ID: ${this.passengerId}\nTrain ID: ${this.trainId}\nBooking Date: ${this.bookingDate}\nNumber of Seats: ${this.numberOfSeats}`;
    }
}
