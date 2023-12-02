// const sum = (a, b) => a + b;
// console.log(sum(10, 5));

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
port = 3000;

// middleware- промежуточное ПО

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(
    `Server listening on port ${port} and starting at http://localhost:${port}`
  );
});
