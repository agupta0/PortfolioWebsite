// Initialize Typed.js for the typed text animation
var typed = new Typed('#typed-text', {
    strings: ["Arushi Gupta"],
    typeSpeed: 50, // Typing speed in milliseconds
    backSpeed: 20, // Backspacing speed in milliseconds
    loop: false // Whether to loop through the strings
});

window.addEventListener('load', function() {
    // Calculate the height of the text
    var textHeight = document.querySelector('#about .text').offsetHeight;

    // Set the height of the image to match the height of the text
    document.querySelector('#about-image').style.height = textHeight + 'px';
});

