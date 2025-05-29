//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
fun main() {
    //    val name = "Kotlin"
    //    //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
    //    // to see how IntelliJ IDEA suggests fixing it.
    //    println("Hello, " + name + "!")
    //
    //    for (i in 1..5) {
    //        //TIP Press <shortcut actionId="Debug"/> to start debugging your code. We have set one <icon src="AllIcons.Debugger.Db_set_breakpoint"/> breakpoint
    //        // for you, but you can always add more by pressing <shortcut actionId="ToggleLineBreakpoint"/>.
    //        println("i = $i")
    //    }
    //Class kt
        val doogie = Dog()
        doogie.name = "Speedy"
        println(doogie.name)
    
        doogie.age = 2
        println(doogie.age)
        doogie.bark()
    
        val myDog = Dogie("Bud", 10)
    //    println(myDog.age)
        myDog.bark()
    
        val person = Person()
        person.setAge(19)
        println("Jenny is ${person.getAge()} years old!")
    
        val theDog = myDog()
        theDog.eat()
        theDog.bark()
        theDog.habitat()
    
        val theCat = myCat()
        theCat.eat()
        theCat.meow()
        theCat.habitat()
    
        val animals: List<Animal> = listOf(myDog(), myCat())
    
        for (animal in animals){
            println(animal.habitat())
        }
    
        val vehicles : List<Vehicle> = listOf(Car(), Motorcycle())
    
        for (vehicle in vehicles){
            vehicle.startEngine()
        }
    
        val circle = Circle(6.7)
        circle.describe()
        println("Area: ${circle.area()}")
    
        val duckie = Duck()
        duckie.fly()
        duckie.swim()
    
        val userX = User("Ali Muhammad", 79)
        println(userX)
    
        val userY = userX.copy(age = 80)
        println(userY)
    
        AppConfig.printConfig()
        
        println(MathUtils.add(9,7))
        println(MathUtils.subtract(9,7))
        println(MathUtils.multiply(9,7))
        println(MathUtils.division(9,7))
        println(MathUtils.modulus(9,7))
    
    
    
    }
    class Dog{
        var name: String = ""
        var age:Int = 0
    
        fun bark(){
            println("$name says: Woof!")
        }
    
    
    
    }
    
    //Constructor
    class Dogie(val name: String, var age:Int){
        init {
            println("Dog created:Name: $name, Age: $age")
        }
        fun bark(){
            println("$name says : Woof! Woof!")
        }
    }
    
    //Encapsulation:Data Privacy
    class Person {
        private var age:Int = 0
    
        fun  setAge(value:Int){
            if(value > 0){
                age = value
            }
        }
    
        fun getAge(): Int{
            return age
        }
    }
    
    // inheritance
    open class Animal{
        fun eat(){
            println("This creature eats food")
    
        }
    
        open fun habitat(){
            println("This animal lives at home")
        }
    
    }
    class myDog: Animal(){
        fun bark(){
            println("Barks Woof!")
        }
    
        override fun habitat() {
            println("The dog lives outside the house")
        }
    }
    
    class myCat:Animal(){
        fun meow(){
            println("Cries meow! meow!")
        }
    
        override fun habitat() {
            println("The cat lives inside the house")
        }
    }
    
    //Overriding and polymorphism
    
    open class Vehicle{
        open fun startEngine(){
            println("The car engine starts")
        }
    }
    
    class Car: Vehicle(){
        override fun startEngine() {
            println("The car engine starts with a button")
        }
    }
    class Motorcycle: Vehicle(){
        override fun startEngine() {
            println("The bike engine starts with a key")
        }
    }
    
    //Abstract classes and interfaces
    abstract  class  Shape{
        abstract  fun area(): Double
    
        fun describe(){
            println("This is a shape")
        }
    }
    class Circle(private val radius: Double):Shape(){
        override fun area(): Double {
            return 3.14 * radius * radius
        }
    }
    //Interfaces
    interface Flyable{
        fun fly()
    }
    interface Swimmable{
        fun swim()
    }
    
    class Duck: Flyable, Swimmable{
        override fun fly() {
            println("Ducks do fly!")
        }
    
        override fun swim() {
            println("Ducks do swim!")
        }
    }
    
    //data classes
    data class User(
        val name: String,
        val age:Int
    )
    
    //object
    object AppConfig{
        val appName = "Imbuto Hub App"
        fun printConfig(){
            println("App downloaded is : $appName")
        }
    }
    
    //companion object: belong to the class not the instance
    //for static like members
    
    class MathUtils{
        companion object {
            fun add(a:Int, b:Int):Int{
                return a + b
            }
            fun subtract(a:Int, b:Int):Int{
                return a - b
            }
            fun division(a:Int, b:Int):Int{
                return a/b
            }
            fun modulus(a:Int, b:Int):Int{
                return a % b
            }
            fun multiply(a:Int, b:Int):Int{
                return a * b
            }
    
        }
    }