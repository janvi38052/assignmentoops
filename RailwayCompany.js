import { Entity } from './Entity.js';

export class RailwayCompany extends Entity {
    constructor(id, companyId, name, headquarters, establishedDate) {
        super(id);
        this.companyId = companyId;
        this.name = name;
        this.headquarters = headquarters;
        this.establishedDate = establishedDate;
    }

    describe() {
        return `Company ID: ${this.companyId} (Entity ID: ${this.getId()})\nName: ${this.name}\nHeadquarters: ${this.headquarters}\nEstablished Date: ${this.establishedDate}`;
    }
}
