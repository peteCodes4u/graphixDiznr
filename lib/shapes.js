// shape
class Shape {
    constructor(header) { this.header = header }
    render() { return `<svg xmlns="http://www.w3.org/2000/svg" >` }
}



// circle
class Circle extends Shape {
    constructor(header, fill, cx, cy, r) {

        super(header)

        this.fill = fill;
        this.cx = "50";
        this.cy = "50";
        this.r = "50";

    }

    render() {
        return `${this.header}<circle fill="${this.fill}" cx="${this.cx}" cy="${this.cy}" r="${this.r}"/>`
    }

}

