console.log('Welcome to Holberton School, what is your name?');

process.stdin.resume();

process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Convertimos el búfer a cadena y eliminamos los espacios en blanco alrededor
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
