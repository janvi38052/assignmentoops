export class DiContainer {
    constructor() {
        this.service = {};
    }

    register(name, dependency) {
        this.service[name] = dependency;
    }

    get(name) {
        return this.service[name];
    }
}
