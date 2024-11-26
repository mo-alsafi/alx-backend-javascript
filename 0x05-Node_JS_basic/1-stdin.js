// Importing the readline module to handle command-line input/output
const readline = require('readline');

// Create a readline interface to interact with the user via stdin and stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);

  rl.on('close', () => {
    console.log('This important software is now closing');
  });
  rl.close();
});
