// Define an array of animation class names
const animationClasses = ["animation-1", "animation-2", "animation-3"];

// Get the text element
const textElement = document.getElementById("text");

// Remove any existing animation classes from the text element
textElement.classList.remove(...animationClasses);

// Generate a random index into the animationClasses array
const randomIndex = Math.floor(Math.random() * animationClasses.length);

// Add the randomly chosen animation class to the text element
textElement.classList.add(animationClasses[randomIndex]);
