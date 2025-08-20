// 1. OOP and Inheritance: Shape Hierarchy

// pseudocode
//    -Start by defining a base class called Shape.
//    - In the Shape class, create a method called getArea that returns zero.
//    - Also in the Shape class, create a method called describe that prints the shape's area.
//    - Create a subclass called Circle that inherits from Shape.
//    - In the Circle class, initialize a radius and check if it is a non-negative number, throwing an error if not.
//    - In the Circle class, override getArea to calculate and return the area using the formula pi times radius squared.
//    - In the Circle class, override describe to print the circle's radius and area.
//    - Create another subclass called Rectangle that inherits from Shape.
//    - In the Rectangle class, initialize width and height, checking if both are non-negative numbers and throwing an error if not.
//    - In the Rectangle class, override getArea to calculate and return the area using width times height.
//    - In the Rectangle class, override describe to print the rectangle's width, height, and area.
//    - Create an array of Shape instances including a Circle and a Rectangle.
//    - Iterate through the array and call the describe method on each shape to demonstrate polymorphism.



//solution
 

   class Shape {
     getArea() {
       return 0;
     }
     describe() {
       console.log(`Shape with area: ${this.getArea()}`);
     }
   }

   class Circle extends Shape {
     constructor(radius) {
       super();
       if (typeof radius !== 'number' || radius < 0) {
         throw new Error("Radius must be a non-negative number");
       }
       this.radius = radius;
     }
     getArea() {
       return Math.PI * this.radius * this.radius;
     }
     describe() {
       console.log(`Circle with radius ${this.radius} and area: ${this.getArea().toFixed(2)}`);
     }
   }

   class Rectangle extends Shape {
     constructor(width, height) {
       super();
       if (typeof width !== 'number' || width < 0 || typeof height !== 'number' || height < 0) {
         throw new Error("Width and height must be non-negative numbers");
       }
       this.width = width;
       this.height = height;
     }
     getArea() {
       return this.width * this.height;
     }
     describe() {
       console.log(`Rectangle with width ${this.width}, height ${this.height} and area: ${this.getArea()}`);
     }
   }

   const shapes = [
     new Circle(5),
     new Rectangle(4, 6)
   ];
   shapes.forEach(shape => {
     shape.describe();
   });
   
