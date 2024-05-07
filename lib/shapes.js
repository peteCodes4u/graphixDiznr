// circle
class Circle {
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    render() {
        return ` width="300" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="${this.cx}" cy="${this.cy}" r="${this.r}"/><text font-family="Calibri" x="50" y="65" font-size="48" font-weight="bold" fill="#FFF" stroke="black" text-anchor="middle">`;
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
        return ` width="300" height="200" viewBox="10 10 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}"/><text font-family="Calibri" x="60" y="80" font-size="55" font-weight="bold" fill="white" stroke= "black" stroke-width="3" text-anchor="middle">`
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
        return ` width="300" height="200" viewBox="50 5 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="${this.pgp1}, ${this.pgp2} ${this.pgp3}, ${this.pgp4} ${this.pgp5}, ${this.pgp6}"/><text font-family="Calibri" x="150" y="145" font-size="75" font-weight="bold" fill="white" stroke= "black" stroke-width="3" text-anchor="middle">`
    }
}

// heart
class Heart {
constructor(d){
    this.d = d;
}
render(){
    return ` width="300" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="${this.d}" /><text font-family="Calibri" x="50" y="60" font-size="40" font-weight="bold" 
style="stroke: black;" fill="#FFF" text-anchor="middle">`
}
}

class Hands {
    constructor(d){
        this.d = d;
    }
    render(){
        return ` width="300" height="200" viewBox="48 0 200 200" xmlns="http://www.w3.org/2000/svg">
<g transform="${this.d}<text font-family="Calibri" x="150" y="120" font-size="55" font-weight="bold" 
fill="white" style="stroke: black;" text-anchor="middle">`
    }
}

class Skull {
    constructor(d){
        this.d = d;
    }
    render(){
        return ` width="300" height="200" viewBox="50 0 500 700" xmlns="http://www.w3.org/2000/svg">
<g transform="${this.d}<text font-family="Calibri" x="270" y="555" font-size="155" font-weight="bold" 
fill="white" stroke= "black" stroke-width="5" text-anchor="middle">`
    }
}

class Bird {
    constructor(d){
        this.d = d;
    }
    render(){
        return ` width="300" height="200" viewBox="10 0 250 250" xmlns="http://www.w3.org/2000/svg">
<g transform="${this.d}<text font-family="Calibri" x="170" y="135" font-size="55" font-weight="bold" fill="white" 
style="stroke: black;" text-anchor="middle">`
    }
}

class Mercury {
    constructor(d){
        this.d = d;
    }
    render(){
        return ` width="300" height="200" viewBox="0 0 200 205" xmlns="http://www.w3.org/2000/svg">
<g transform="${this.d}<text font-family="Calibri" x="100" y="60" font-size="50" font-weight="bold" fill="white" 
stroke= "black" stroke-width="2" text-anchor="middle">`
    }
}

class Spiral {
    constructor(d){
        this.d = d;
    }
    render(){
        return ` width="200px" height="300px" viewBox="0 0 200 206" xmlns="http://www.w3.org/2000/svg">
<g transform="${this.d}<text font-family="Calibri" x="105" y="125" font-size="100" font-weight="bold" fill="white" 
stroke= "black" stroke-width="2" text-anchor="middle">`
    }
}
module.exports = { Circle, Square, Triangle, Heart, Hands, Skull, Bird, Mercury, Spiral };