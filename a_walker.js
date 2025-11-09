class walker {
    constructor() {
        this.pos=createVector(width/2, height/2);
        this.vel=createVector();
        this.acc=createVector();
    }

    balloon() {
        fill("black");
        circle(this.pos.x, this.pos.y, 100);
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0)
    }

    applyforce(force) {
        this.acc.add(force);
    }
}