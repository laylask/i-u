// Define an array of jokes
const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything.",
  "What do you call an alligator in a vest? An investigator.",
  "Why don’t oysters give to charity? They’re shellfish.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "What do you get when you cross a snowman and a shark? Frostbite."
];

// Initialize an empty array to keep track of viewed jokes
let viewedJokes = [];

// Get the joke button and the joke container
const jokeButton = document.getElementById("jokeButton");
const jokeContainer = document.getElementById("jokeContainer");

// Add an event listener to the joke button
jokeButton.addEventListener("click", function() {
  // Filter out the viewed jokes from the jokes array
  const newJokes = jokes.filter(joke => !viewedJokes.includes(joke));
  
  // If all jokes have been viewed, reset the viewedJokes array
  if (newJokes.length === 0) {
    viewedJokes = [];
    newJokes = jokes;
  }
  
  // Get a random joke from the newJokes array
  const randomIndex = Math.floor(Math.random() * newJokes.length);
  const randomJoke = newJokes[randomIndex];
  
  // Add the random joke to the viewedJokes array
  viewedJokes.push(randomJoke);
  
  // Display the random joke in the joke container
  jokeContainer.innerHTML = randomJoke;
});
