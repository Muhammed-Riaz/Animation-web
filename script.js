// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typed.js for the typing effect
    new Typed('#welcomeHeading', {
        strings: ["Welcome to my animation website"],
        typeSpeed: 50, // Typing speed
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        showCursor: false, // Disable cursor for typed.js
        onComplete: () => {
            // Show the button after typing is complete
            document.getElementById('startAnimationBtn').style.display = 'block';
        }
    });

    // Event listener for the button to show animation
    document.getElementById('startAnimationBtn').addEventListener('click', () => {
        document.getElementById('main').style.display = 'block'; // Show the animation section
        startAnimation(); // Start the image animation
    });
});

// Function to start the image animation using anime.js
function startAnimation() {
    anime({
        targets: '#animatedImage',
        translateX: () => anime.random(-50, 50) + 'vw',
        translateY: () => anime.random(-50, 50) + 'vh',
        scale: [1, 1.5],
        rotate: '1turn',
        duration: 2000,
        easing: 'easeInOutQuad',
        complete: startAnimation
    });
}
