abstract class Shape {
    abstract double area();
}

class Rectangle extends Shape {
    double length, breadth;

    public Rectangle(double length, double breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    @Override
    double area() {
        return length * breadth;
    }
}

class Circle extends Shape {
    double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

public class ShapeDemo {
    public static void main(String[] args) {
        Shape rect = new Rectangle(10, 5);
        System.out.println("Area of Rectangle = " + rect.area());

        Shape circle = new Circle(7);
        System.out.println("Area of Circle = " + circle.area());
    }
}
