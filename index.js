toyOne = "teddy bear";
toyTwo = "lion";

console.log("toy one", toyOne);
console.log("toy two", toyTwo);

toyOne = "garbage";

console.log("new toy one", toyOne);

console.log("EXERCISE 1 =================")
// 1. Create a variable that holds the value of your name as a string
// 2. Create a variable that holds the value of your age as a number
// 3. Create a variable that holds the value of whether or not you like cats as a boolean
// 4. Console log each of the variables in the steps above
// * When assigning an already defined variable a new value, DON'T use the keywork var
// 5. Assign a new value to your age value with your favorite age. (If your favorite age is your current age, then make it your second favorite age.)
// 6. Console log your age variable again.
var name = "Lindsay"
var age = 307
var cats = true
console.log("name", name);
console.log("my age is", age);
console.log("do i like cats?", cats);
age = 82
console.log("my age is ", age);

console.log("EXERCISE 2 =================")
// 1. Create a variable that stores a number for how many products your store currently carries.
// 2. Update your variable from step 1 by adding the number 6 to your current number of products.
// 3. Console log the new number of products in your store.
// 4. Create one variable that holds a string of your first name. Create a second variable that holds a string of your last name.
// 5. Create a variable called fullName that concatinates the 2 variables from step 4. 
// 6. Console log a message that reads "Hello, my name is [insert your full name]." using the variable from step 5.
// 7. Do the following math operation: Take the number of new product in your store and add 1 to it. Then multiply that number by 3. Do this in one step. (Hint: You'll need to use grouping for this.)
var lindsayStoreProducts = 72;
lindsayStoreProducts += 6
console.log("how many products", lindsayStoreProducts);
var first = "Lindsay";
var last = "Mulhollen";
var fullName = first + " " + last;
console.log("hello, my name is", fullName);
var storeMath = (lindsayStoreProducts++) * 3;
console.log("store math", storeMath);

// 1. Create a variable that stores the number of products in your store. 
// 2. Write an if/else statement that uses your variable from part 1 to console log a different statement based on the following scenarios.
// If the number of products is exactly 0, console log "Sold out."
// If the number of products is 3 or less (but not 0), console log 
// If the number of products is greater than 3, console log "Buy this product!"
// Try changing the value of your variable in step 1 a couple of times to try to print each of the different messages.


var storeProducts = 23;
if (storeProducts === 0) {
    console.log("Sold out.");
} else if (storeProducts <= 3 && storeProducts > 0) {
    console.log("Only a few left! Buy soon.");
} else if (storeProducts > 3) {
    console.log("Buy this product!");
}

// 3. Create a variable that stores your favorite ice cream flavor. 
// 4. Write an if/else statement that uses your variable from part 3 to console log a different statement based on the following scenarios.
// If your favorite ice cream flavor is chocolate, console log "User likes chocolate best."
// If your favorite ice cream flavor is vanilla, console log "User likes vanilla best."
// If your favorite ice cream flavor is mint chocolate chip, console log "User likes mint chocolate chip best."
// If your favorite ice cream flavor is something else, console log "User likes *other* best." Bonus: fill in *other* with the value of the variable you used from step 3. 

var icecream = "strawberry";

if (icecream === "chocolate") {
    console.log("User likes chocolate best.");
} else if (icecream === "vanilla") {
    console.log("User likes vanilla best.");
} else if (icecream === "mint chocolate chip") {
    console.log("User likes mint chocolate chip best.");
} else {
    console.log(`User likes ${icecream} best`);
}
