export class Entity {
    constructor(id) {
        if (new.target === Entity) {
            throw new Error("We cannot create an instance of the Entity class");
        }
        this.id = id;
    }

    getId() {
        return this.id;
    }

    describe() {
        throw new Error("Method describe must be implemented");
    }
}
