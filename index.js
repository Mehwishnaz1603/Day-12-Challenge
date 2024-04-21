// 🚀 Day 11 Challenge: Start Coding! 🚀//
//Q34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names 
//in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing 
//just the name of the pizza. For each pizza you should have one line of output containing a 
//simple statement like I like pepperoni pizza
var fvt_pizza = ["peproni", "Cheese", "BBQ Chicken", "Sicilian"];
for (var _i = 0, fvt_pizza_1 = fvt_pizza; _i < fvt_pizza_1.length; _i++) {
    var pizzas = fvt_pizza_1[_i];
    console.log("I like ".concat(pizzas, " pizza."));
}
console.log("I really love Pizzas");
//Q35: Think of at least three different animals that have a common characteristic. Store the names of these 
//animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a 
//sentence such as Any of these animals would make a great pet!
var pet_animal = ["Dog", "Cat", "Lion", "Horse", "Monkey"];
pet_animal.forEach(function (pet_animal) {
    console.log("A ".concat(pet_animal, " would make a great pet."));
});
console.log("But I always prefer cats.");
//Q36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
// that should be printed on the shirt. The function should print a sentence summarizing the 
//size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log("The shirt size should be: ".concat(size, ", and must be printed with: ").concat(message));
}
make_shirt("Small", "<\My Life My Rules\>");
make_shirt("Medium", "<\I am a Codinggirl\>");
make_shirt("Large", "<\I love codimg\>");
