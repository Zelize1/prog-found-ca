// question 1

var food = "pancake";

// question 2

var person = {
    name: "Cecilie",
    gender: "girl"
};

// question 3

var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// question 4

var numbers = [3, 27, 12, 65, 92];

console.log(numbers);

// question 5

for(var count = 15; count <= 25; count++) {
    console.log(count);
}

// question 6

var count = 20; 

if(count === 20) {
    console.log("20");
}
else {
    // no message
}

// question 7

var foodArray = [
    {
        foodType: "fries",
        foodQuantity: 50,
        foodYummy: true
    },

    {
        foodType: "raspberry",
        foodQuantity: 3,
        foodYummy: false
    }
];

for(var i = 0; i < foodArray.length; i++) {
    console.log(foodArray[i].foodQuantity);
    console.log(foodArray[i].foodYummy);
}

// question 8

function whatIDontLike(dislike) {
    console.log("I don't like " + dislike);
}

whatIDontLike("snow");

// question 9

function subtractArgument(argument1, argument2) {
    var sum = argument2 - argument1;
    console.log(sum);
}

subtractArgument(98, 343);

// question 10

var guitars = [];

function myFavouriteGuitars(guitarTypes) {
    guitars.push(guitarTypes);
}

myFavouriteGuitars("explorer");
