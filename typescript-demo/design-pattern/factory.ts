
/**
 * Shape 
 */
interface Shape {
    draw(): void;
}

class CircleShape implements Shape {

    public CircleShape(): void {
        console.log("Im circle.");
    }

    public draw(): void {
        console.log("Im drawing.");
    }

}

class RectShape implements Shape {
    public RectShape(): void {
        console.log("Im Rect.");
    }

    public draw(): void {
        console.log("Im drawing.");
    }

}

class ShapeFactory {
    public static getShape(type: string): Shape {
        let shape: Shape = null;
        if (type == "circle") {
            shape = new CircleShape();
        } else if (type == "rect") {
            shape = new RectShape();
        }
        return shape;
    }
}


