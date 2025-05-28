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


function isPalindrome(str) { 

  return str === str.split(”).reverse().join(”); 

}


const reverseString = (str) => str.split(”).reverse().join(”); 








 
