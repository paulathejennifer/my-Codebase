const { count } = require("console");

// assign  variable to be used later
let myVar;
myVar = 20;
console.log(myVar);


const my_constant = 10;
console.log(my_constant);

let x = 5
if(x>5){
    console.log("xis greater than 5");
    
}
else{
    console.log("x is not greater than 5");
    
}

for(let i = 0; i < 5; i++){
    console.log(i);
}


function greet(){
    console.log("Hey there!");
    
}
greet();


function findSquare(number){
    return number * number
}

let result = findSquare(5);
console.log(result);


let fruits = ["apple","banana", "mango"]

let firstFruit = fruits[0];
let secondFruit= fruits[1];
let thirdFruit = fruits[2]

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

fruits = ["apple", "banana"];
fruits.push("cherry")
console.log(fruits);


fruits = ["apple", "mango", "carrot"];
let numberOfFruits = fruits.length;
console.log(numberOfFruits);


//Creating Strings
const singleQuoted = 'Hello';
const  doubleQuoted = "Hello";
const templateLiteral =`This is a multi-line string`


//String concatenation
const greetingJS = "Hello"+"JavaScript";
const nameJS = "Bobby";
const greetingTemplate = `Hello, ${nameJS}!`;
const stringWithExpression = `The length of my name is ${nameJS.length}`
console.log(greetingJS);
console.log(greetingJS.length);
console.log(greetingJS[0]);
console.log(greetingJS[1]);
console.log(greetingJS[-1]);
console.log(greetingJS[5]);
console.log(greetingJS[-4]);
console.log(greetingJS.toLowerCase());
console.log(greetingJS.toUpperCase());
console.log(greetingJS.substring(0,5));
console.log(greetingJS.includes("JavaScript"));
console.log(greetingJS.replace("JavaScript", "World!"));

const nameString = "Jennifer Chinyere"
const greeting =" Nice to meet you"
const greetMe = nameString+greeting
console.log(greetMe);
console.log(`The length of my name is ${nameString.length}`);
console.log(nameString[0]);
console.log(nameString.toLowerCase());
console.log(nameString.toUpperCase());


const sumJs = 5+3
const differenceJS = 10-6
const productJS = 3*5
const quotientJs = 4/3
const remainderJS = 4%3
let numJs = 10;
console.log(numJs)
const powerJS = 2 ** 4;
console.log(powerJS);

//Functions prototypes and objects
//Building an inventory store
const product1 ={
    name:"Laptop Lenovo V",
    price: 12000,
    displayDetails:function(){
        return `${this.name}: $${this.price}`
    },
    discountedPrice:function(discountedPercentage){
        const discountAmount=this.price*(discountedPercentage/100)

        return discountAmount
    }

 
    
}

console.log(product1.displayDetails());

//Creating multiple products

//1, Factory function

function createProcucts(name, price){
    return {

        name:name, price:price, displayDetails: function(){
            return `${this.name}: Ksh. ${this.price}`
        }
    }
}


const create= createProcucts("Doll",50)
console.log(create);



const create1= createProcucts("Book",150)
console.log(create1);

//2. constructor function with prototype

function myProduct(name, price){
    this.name=name;
    this.price=price;

}
myProduct.prototype.displayDetails=function(){
            return `${this.name}: Ksh. ${this.price}`
}

const product= new myProduct("SmartWatch", 10000);
console.log(product);

const product3= new myProduct("Lollipop", 10);
console.log(product3);

myProduct.prototype.discountedPrice=function(discountedPercentage){
    const discountAmount = (discountedPercentage/100)*this.price

    return this.price-discountAmount;
}


console.log(product1.discountedPrice(20));

//The Shape Calculator
// function Shape(name){
//     this.name
// }
// Shape.prototype.calculateArea=function(){
//    return "Area calculation not defined"
// }
    
//     function Circle(radius){
//         Shape.call(this, "Circle");
//         this.radius= radius;
//     }


//     Circle.prototype.calculateArea= function(){

    
// return 22/7 * this.radius*this.radius
//     }

// const myCircle = new Circle(5);
// console.log(myCircle.name);

function Shape(name){
    this.name = name;

}
Shape.prototype.calculateArea= function(){
    return "Area undefined"
}
function Triangle(base,height){
    Shape.call(this, "Triangle")
    this.base=base;
    this.height = height;
}
Triangle.prototype.calculateArea=function(){
    return this.base * this.height/2
}


const tri = new Triangle (2,30)
console.log(tri.calculateArea());




function gcd(a,b){
 a = Math.abs(a)
 b = Math.abs(b)   
 const larger = Math.max(a,b);
 const smaller = Math.min(a,b);
 while(b){
    const temp = b;
    b = a % b
    a = temp;

 }
 return a
}

const numbers = (7,14)
console.log(gcd(numbers));


function lcm(a,b){
    if(a===0||b===0){
        return 0;
    }
    a=Math.abs(a);
    b=Math.abs(b);
    const larger = Math.max(a,b);
    const smaller = Math.min(a,b);
    let multiple = larger;
    while(multiple % smaller !==0){
        multiple+=larger;
    }
    return multiple;
}
console.log(`LCM of the two numbers is ${lcm(12,16)}`);


function repeatingBusSchedules(busA, busB){
if(busA===0||busB===0){
    return 0;console.log(`LCM of the two numbers is ${lcm(12,16)}`);
}
busA=Math.abs(busA);
busB=Math.abs(busB);

const larger = Math.max(busA,busB);
const smaller =Math.min(busA,busB);
let multiple = larger;
while(multiple%smaller !==0){
    multiple+=larger
}
return multiple/60

}
console.log(`When they are going to meet is after ${repeatingBusSchedules(15,24)} hours`);
// function findMaxNumber(arr) { 

//     return Math.max(...arr); 
  
//   } 


function findMaxNumber(arr){
    return Math.max(...arr)
}
const nums = [1,2,3,4,6,2,89]
console.log(findMaxNumber(nums));
console.log(findMinNumber(nums));

function findMinNumber(arr){
    return Math.min(...arr)
}

function isPalindrome(str){
    return str.toLowerCase()===str.toLowerCase().split("").reverse().join("")
}

const name = "Nen"
console.log(isPalindrome(name));


function reverseStr(str){
    return str.toUpperCase().split("").reverse().join("")
}
console.log(reverseStr("Hello"));

function isValid(age){
    return age >=18 && age<=60
};

console.log(isValid(17));
console.log(isValid(18));
console.log(isValid(19));
console.log(isValid(59));
console.log(isValid(60));
console.log(isValid(61));


function findTimeMet(carA, carB){
    carA = Math.abs(carA);
    carB = Math.abs(carB);

    let larger = Math.max(carA, carB);
    let smaller = Math.min(carA, carB);
    let multiple = larger

    while(multiple%smaller !== 0){
        multiple+=larger
    }
    return multiple/60
}

console.log(`The two cars met after ${findTimeMet(15,42)} hours`);

class Person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country:${this.country}`);
        
    }
}

//Create instances of the person class

const person1 = new Person('Yerusalem Daanait', 25, 'Ethiopia');
const person2 = new Person('Jackline Nyinawabagesera',27, 'Rwanda')


//Display detai;ls of person1
console.log('Person1 Details:');
person1.displayDetails();


//Display details of person2
console.log('Person2 Details:');
person2.displayDetails();


class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calculateArea(){
        return this.width * this.height
    }

    calculatePerimeter(){
        return 2 * (this.width + this.height)
    }
}

//Create an instance of the rectangle class
const rectangle = new Rectangle(12, 10);

//Calculate area and perimeter of the rectangle
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

//Display results 
console.log(`Rectangle Area: ${area}`);
console.log(`Rectangle Perimeter: ${perimeter}`);


class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year
    }
}

class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber
        this.balance = balance

        console.log(`A/c No.: ${accountNumber}`);
        console.log(`Opening Balance: $${balance}`);
         
    }
    deposit(amount){
        this.balance += amount
        console.log(`Deposite: $${amount}`);
        
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount
            console.log(`Withdrawn: $${amount}`);
            
        }
    }
}


//Char counts
//Initialize an empty object: Cunts to store the count of characters
//Iterate over each character in the string
//Check if the char is already a key in the objects
//If it exists increment in counts
//else add it with a count of 1

function characterCount(str){
    const counts = {}

    for(let i = 0; i<str.length; i++){
        const char = str[i]

        if (counts[char]){
            counts[char]++
        }
        else{
            counts[char]= 1
        }
    }
    return counts
}

console.log(characterCount("hello everybody"))

//Anagram check 
//1. Sorting
//2. Character count

function getCharcterCounts(str){
    const counts = {}
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,"")
    
    for (let i =0; i<cleanStr.length;i++){
        const char = cleanStr[i]

        if(counts[char]){
            counts[char]++
        }
        else{
            counts[char]=1
        }

    }
    return counts
}


function areAnagrams(str1, str2){
    const counts1 = getCharcterCounts(str1)
    const counts2 = getCharcterCounts(str2)

    if(Object.keys(counts1).length !== Object.keys(counts2).length){
        return false
    }

    for (const char in counts1){
        if(counts1[char]!==counts2[char]){
            return false
        }
    }
    return true
}
console.log("___Anagram Check Test Cases___");
console.log(`"b c0redi" and "debit card": ${areAnagrams("listen", "silent")}` );


