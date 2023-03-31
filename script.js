// Define an array of animation class names
const animationClasses = ["animation-1", "animation-2", "animation-3"];
// Generate a random index into the animationClasses array
const randomIndex = Math.floor(Math.random() * animationClasses.length);
// Get the text element and add the randomly chosen animation class
const textElement = document.getElementById("text");
textElement.classList.add(animationClasses[randomIndex]);
