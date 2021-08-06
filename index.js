class Circle {
    constructor(radius) {
        this.radius = radius
    }

    set diameter(num) {
        this.radius = num / 2
    }

    set circumference(num) {
        this.radius = (num / Math.PI) / 2
    }

    set area(num) {
        this.radius = Math.sqrt(num / Math.PI)
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area() {
        return (this.radius * this.radius) * Math.PI
    }
} 