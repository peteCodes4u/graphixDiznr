// class for circle
class Circle {
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    render() {
        return ` width="300" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="${this.cx}" cy="${this.cy}" r="${this.r}"/>`;
    }
}

// class for square
class Square {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }
    render() {
        return ` width="300" height="200" viewBox="10 10 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}"/>`
    }
}

// Triangle 
class Triangle {
    constructor(pgp1, pgp2, pgp3, pgp4, pgp5, pgp6) {
        this.pgp1 = pgp1;
        this.pgp2 = pgp2;
        this.pgp3 = pgp3;
        this.pgp4 = pgp4;
        this.pgp5 = pgp5;
        this.pgp6 = pgp6;
    }
    render() {
        return ` width="300" height="200" viewBox="50 5 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="${this.pgp1}, ${this.pgp2} ${this.pgp3}, ${this.pgp4} ${this.pgp5}, ${this.pgp6}"/>`
    }
}

// heart
class Heart {
    constructor(d) {
        this.d = d;
    }
    render() {
        return ` width="300" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="${this.d}" />`
    }
}

// hands
class Hands {
    constructor(d) {
        this.d = d;
    }
    render() {
        return ` width="300" height="200" viewBox="48 0 200 200" xmlns="http://www.w3.org/2000/svg">
<g transform="${this.d}`
    }
}

// skull
class Skull {
    constructor(d) {
        this.d = d;
    }
    render() {
        return ` width="300" height="200" viewBox="50 0 500 700" xmlns="http://www.w3.org/2000/svg">
<g transform="${this.d}`
    }
}

// bird
class Bird {
    constructor(d) {
        this.d = d;
    }
    render() {
        return ` width="300" height="200" viewBox="10 0 250 250" xmlns="http://www.w3.org/2000/svg">
<g transform="${this.d}`
    }
}

// mercury
class Mercury {
    constructor(d) {
        this.d = d;
    }
    render() {
        return ` width="300" height="200" viewBox="0 0 200 205" xmlns="http://www.w3.org/2000/svg">
<g transform="${this.d}`
    }
}

// spiral
class Spiral {
    constructor(d) {
        this.d = d;
    }
    render() {
        return ` width="200px" height="300px" viewBox="0 0 200 206" xmlns="http://www.w3.org/2000/svg">
<g transform="${this.d}`
    }
}

module.exports = { Circle, Square, Triangle, Heart, Hands, Skull, Bird, Mercury, Spiral };