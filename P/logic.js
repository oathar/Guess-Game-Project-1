// Generate a random number between 1 and 100
let cnum = Math.floor(Math.random() * 100) + 1;
// Initialize the attempt counter
let attempt = 0;

// Get references to HTML elements
const userinp = document.getElementById("inp");
const subBtn = document.getElementById("submit");
const resBtn = document.getElementById("resBtn");
const message = document.getElementById("msg");
const attemptSpan = document.getElementById("Attempt");

// Function to check the user's guess
function check() {
    // Get the user's guess and convert it to a number
    const usernum = parseInt(userinp.value);
    
    // Validate the user's input
    if (isNaN(usernum) || usernum < 1 || usernum > 100) {
        message.innerHTML = "Please enter a valid number between 1 and 100.";
        message.style.color = "red";
        return;
    }
    
    // Increment the attempt counter and update the display
    attempt++;
    attemptSpan.innerHTML = attempt;
    userinp.value = "";

    // Check if the user's guess is correct
    if (cnum === usernum) {
        message.innerHTML = "Congratulations! You have guessed the number!";
        message.style.color = "green";
        resBtn.style.display = "block";

    // Check if the user's guess is too high
    } else if (cnum < usernum) {
        message.innerHTML = "Too High! Try again.";
        message.style.color = "red";

    // Check if the user's guess is too low
    } else {
        message.innerHTML = "Too Low! Try again.";
        message.style.color = "red";
    }
}

// Event listener for pressing the Enter key
userinp.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        check();
    }
});

// Event listener for clicking the submit button
subBtn.addEventListener("click", check);

// Function to restart the game
function restart() {
    // Generate a new random number and reset the attempt counter
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    attemptSpan.innerHTML = attempt;
    userinp.value = "";
    message.innerHTML = "";
    message.style.color = "black";
    resBtn.style.display = "none";
}

// Event listener for clicking the restart button
resBtn.addEventListener("click", restart);
