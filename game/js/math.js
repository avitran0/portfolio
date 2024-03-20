export class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(v) {
        return new Vec2(this.x + v.x, this.y + v.y);
    }
    sub(v) {
        return new Vec2(this.x - v.x, this.y - v.y);
    }
    mul(s) {
        return new Vec2(this.x * s, this.y * s);
    }
    div(s) {
        return new Vec2(this.x / s, this.y / s);
    }
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    len() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    norm() {
        return this.div(this.len());
    }
    angle() {
        return Math.atan2(this.y, this.x);
    }
    rotate(a) {
        return new Vec2(this.x * Math.cos(a) - this.y * Math.sin(a), this.x * Math.sin(a) + this.y * Math.cos(a));
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}
