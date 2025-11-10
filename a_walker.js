class walker {
    constructor() {
        this.pos=createVector(width/2, height/2);
        this.vel=createVector();
        this.acc=createVector();
        this.r=0;
        this.colorList=["red", "orange", "yellow", "green", "blue", "purple"];
        this.color=(random(this.colorList));
    }

    balloon() {
        noStroke();
        fill(this.color);
        circle(this.pos.x, this.pos.y, this.r*2);
    }

    radius(air) {
        this.r += air;
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0)
        this.ceiling();
    }

    applyforce(force) {
        this.acc.add(force);
    }

    ceiling() {
        if (this.pos.y-this.r<0) {
            this.pos.y=this.r;
        }
    }

    pop() {
        if (this.r>100) {
            this.r=0;
            this.pos=createVector(width/2, height/2);
            this.vel.mult(0);
            this.color=(random(this.colorList));
        }
    }
}