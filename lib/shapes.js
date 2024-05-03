
// circle
class Circle {
    constructor(cx, cy, r) {

        this.cx = cx;
        this.cy = cy;
        this.r = r;

    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}"/><text font-family="Calibri" x="50" y="65" font-size="48" font-weight="bold" fill="#FFF" stroke= "black" text-anchor="middle">`
    }

}

module.exports = {

Circle

}