// circle
class Circle {
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}"/><text font-family="Calibri" x="50" y="65" font-size="48" font-weight="bold" fill="#FFF" stroke="black" text-anchor="middle">`;
    }
}

// square <rect x="10" y="10" width="100" height="100" />
class Square {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }
    render(){
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}"/><text font-family="Calibri" x="60" y="80" font-size="60" font-weight="bold" fill="white" stroke= "black" stroke-width="3" text-anchor="middle">`
    }
}

// Triangle <polygon points="150, 18 244, 182 56, 182"/>
class Triangle {
    constructor(pgp1, pgp2, pgp3, pgp4, pgp5, pgp6){
        this.pgp1 = pgp1;
        this.pgp2 = pgp2;
        this.pgp3 = pgp3;
        this.pgp4 = pgp4;
        this.pgp5 = pgp5;
        this.pgp6 = pgp6;
    }
    render(){
        return `<polygon points="${this.pgp1}, ${this.pgp2} ${this.pgp3}, ${this.pgp4} ${this.pgp5}, ${this.pgp6}"/><text font-family="Calibri" x="150" y="145" font-size="75" font-weight="bold" fill="white" stroke= "black" stroke-width="3" text-anchor="middle">`
    }
}

// heart
class Heart {
constructor(d){
    this.d = d;
}
render(){
    return `<path d="${this.d}" /><text font-family="Calibri" x="50" y="60" font-size="40" font-weight="bold" style="stroke: black;" fill="#FFF" text-anchor="middle">`
}
}

// skull
class Skull {
    constructor(){}
}
module.exports = { Circle, Square, Triangle, Heart };