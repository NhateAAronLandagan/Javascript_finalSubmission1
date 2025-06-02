// Toggle Menu script
const toggleMenu = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');

// Function starts
toggleMenu.addEventListener('click', function () {
    if (menu.style.display === 'none'){ // if & eLse condition starts here
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
        toggleMenu.display = 'none';
    }

});

// Alert Script
const alertButton = document.getElementById('alertButton');

// Function starts
alertButton.addEventListener('click', function () {
    alert("Hi! This is an alert message!");
});

// Increment & Decrement Script
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const counterValue = document.getElementById('counter');

// Counter Value
let counter = 0;


incrementButton.addEventListener('click', function() {
    counter += 1; //Counter Value will increase by 1
    counterValue.textContent = counter;
});

decrementButton.addEventListener('click', function() {
    counter -= 1; //Counter Value will decrease by 1
    counterValue.textContent = counter;
});

// Reset button script
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
    location.reload();
});

// Form Validation script
const inputText = document.getElementById('inputText');
const greetButton = document.getElementById('greetButton');
const greetParagraph = document.getElementById('greetParagraph');

function isValidName (name){ //function starts here
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

greetButton.addEventListener('click', function () {
    const username = inputText.value.trim(); //for the user's input value

    if (username === '') { //if & else statement condition starts here
        greetParagraph.textContent = 'Please fill the form';
    } else if (!isValidName(username)) {
        greetParagraph.textContent = 'Please input a valid character!';
    } else {
        greetParagraph.textContent = `Hello, ${username} Welcome to the site!`;
    }
});

// Dom manipulation script
const addParagraph = document.getElementById('addParagraph');
const textParagraph = document.getElementById('text');

addParagraph.addEventListener('click', function () {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Congratulations on learning Practical JavaScript!';
    textParagraph.appendChild(newParagraph);
});