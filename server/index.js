const express = require('express');
const path = require('path');
// const controllers = require('./controllers');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});