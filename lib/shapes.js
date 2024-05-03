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
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" />`
    }
}

module.exports = Circle, Square;