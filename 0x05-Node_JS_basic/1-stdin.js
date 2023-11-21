const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (userInput) => {
  // Assuming you want to print a personalized message based on the user's name
  console.log(`Your name is: ${userInput}`);
  console.log('This important software is now closing');
  rl.close();
});

module.exports = rl;
