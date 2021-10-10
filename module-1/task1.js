import chalk from 'chalk';

console.log(chalk.blue('Task 1 is up and running'));

process.stdin.on('data', (data) => {
  const output = data.toString().split('').slice(0, -1).reverse()
    .join('');
  process.stdout.write(`${output}\n`);
});

// Implementation with readline module API
// import readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false,
// });
//
//
// rl.on('line', (line) => {
//   const output = line.split('').reverse().join('');
//   console.log(output);
// });
