const express = require('express');
const path = require('path');
const controllers = require('./Controllers');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/*', controllers.get);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});