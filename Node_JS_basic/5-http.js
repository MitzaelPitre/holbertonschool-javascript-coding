const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    handleStudentsRequest(req, res);
  }
});

async function handleStudentsRequest(req, res) {
  try {
    const dbInfo = await countStudents(process.argv[2]);
    res.end(`This is the list of our students\n${dbInfo}`);
  } catch (err) {
    res.end(`Error: ${err.message}`);
  }
}

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
