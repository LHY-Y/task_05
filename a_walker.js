class walker {
    constructor() {
        this.pos=createVector();
        this.vel=createVector();
        this.acc=createVector();
    }

    balloon() {
        fill("black");
        circle(width/2, height/2, 100);
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }

    applyforce(force) {
        this.acc=force;
    }
}