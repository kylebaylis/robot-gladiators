// this creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");

// What is this? It outputs a log when using inspect in the browser and going to console, tells you what line of your code was used
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
console.log(10 + 10);

// adding a string plus the var (user input)
console.log("Our robot's name is " + playerName);

function fight() {
    window.alert("The fight has begun!");
}

// this calls the function named "fight"

// fight();