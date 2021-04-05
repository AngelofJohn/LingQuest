class Player {
    static maxHealth = 5;

    constructor() {
        this.balance = .0;
        this.experience = 0;
        this.health = 4;
        this.inventory = [];
        this.completedQuests = [];
        this.name = "John";

        this.answer = '';
    }

    dump() { }
    load() { }
}
