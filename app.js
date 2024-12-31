const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Randomized data for messages
const wishes = [
  "🎉 Happy New Year, {name}! May 2025 bring you joy, love, and endless success!",
  "🌟 Wishing you a sparkling New Year, {name}! Here's to a fantastic 2025!",
  "🎊 Cheers to you, {name}! May the New Year fill your life with happiness and prosperity!"
];

const predictions = [
  "{name}, 2025 looks promising for you! Expect exciting opportunities ahead.",
  "This year, {name}, your hard work will pay off, and you'll achieve your dreams.",
  "In 2025, {name}, new doors will open for you, and you'll find true happiness.",
  "Get ready for a wonderful 2025, {name}! Great things are on their way.",
  "This year, {name}, you'll discover new passions that will shape your future.",
  "{name}, 2025 will bring you closer to achieving your long-term goals.",
  "Expect 2025 to be a year of personal growth and exciting opportunities, {name}.",
  "In 2025, {name}, you'll make meaningful connections that will enrich your life.",
  "{name}, this year will be full of surprises, both professionally and personally.",
  "2025 will bring clarity and purpose to your journey, {name}.",
  "This year, {name}, you'll inspire others with your resilience and positivity."
];

const behaviors = [
  "{name}'s are often admired for their vibrant personalities and charismatic nature.",
  "People with the name {name} are known to be thoughtful and caring individuals.",
  "{name}'s are natural leaders, often inspiring others with their confidence and determination.",
  "Those named {name} are creative and have a knack for thinking outside the box.",
  "{name}'s are known for their unwavering determination and ability to overcome challenges.",
  "People with the name {name} often have a deep sense of empathy and understanding.",
  "{name}'s are adventurous souls, always seeking new experiences and knowledge.",
  "Individuals named {name} are creative thinkers who can find unique solutions to problems.",
  "{name}'s are natural storytellers, captivating others with their words and ideas.",
  "Those named {name} are often considered dependable and trustworthy by their peers.",
  "{name}'s are curious learners, always eager to explore the unknown."
];

// Phrases that trigger a "Thanks" response
const thanksPhrases = [
  "happy new year", 
  "new year", 
  "same2u", 
  "same to you", 
  "happy new year to you",
  "hny",            // Short version of Happy New Year
  "ny",             // Short version of New Year
  "new year wishes", 
  "happy 2025", 
  "wishing you a happy new year",
  "wish you a happy new year", 
  "happy new year buddy", 
  "cheers to the new year", 
  "happy new year everyone",
  "have a great new year", 
  "same here", 
  "same to you too", 
  "happy new year all",
  "wish you the best this year",
  "have a fantastic new year",
  "U2","u2","s2u","S2U"
];

// Add a message to the chat window
function displayMessage(message, type) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', type);
  messageElement.innerHTML = message;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Function to check if the user input matches any trigger phrases
function isThanksPhrase(input) {
  return thanksPhrases.some(phrase => input.toLowerCase().includes(phrase));
}

// Handle user input
function handleUserInput() {
  const userName = userInput.value.trim();

  if (userName) {
    displayMessage(userName, 'sent'); // Show user input
    userInput.value = ''; // Clear input field

    // Check if the input contains any "thanks" phrases
    if (isThanksPhrase(userName)) {
      // Reply with a "Thanks" message
      setTimeout(() => {
        displayMessage("Thanks! Wishing you a fantastic New Year too! 🎉", 'received');
      }, 1000);
    } else {
      // First response: New Year wish
      setTimeout(() => {
        const wish = wishes[Math.floor(Math.random() * wishes.length)].replace('{name}', userName);
        displayMessage(wish, 'received');
      }, 1000);

      // Second response: Behavior description
      setTimeout(() => {
        const behavior = behaviors[Math.floor(Math.random() * behaviors.length)].replace('{name}', userName);
        displayMessage(behavior, 'received');
      }, 3000);

      // Third response: Prediction
      setTimeout(() => {
        const prediction = predictions[Math.floor(Math.random() * predictions.length)].replace('{name}', userName);
        displayMessage(prediction, 'received');
      }, 5000);
    }
  }
}

// Event listener for the send button
sendButton.addEventListener('click', handleUserInput);

// Pressing 'Enter' triggers the send button
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleUserInput();
  }
});
