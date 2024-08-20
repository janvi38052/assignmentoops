import { Entity } from './Entity.js';

export class BookingAgent extends Entity {
    constructor(id, agentId, name, contactNumber, email, agencyName) {
        super(id);
        this.agentId = agentId;
        this.name = name;
        this.contactNumber = contactNumber;
        this.email = email;
        this.agencyName = agencyName;
    }

    describe() {
        return `Agent ID: ${this.agentId} (Entity ID: ${this.getId()})\nName: ${this.name}\nContact Number: ${this.contactNumber}\nEmail: ${this.email}\nAgency Name: ${this.agencyName}`;
    }
}
