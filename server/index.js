const http = require('http');
const express = require('express');
const path = require('path');
const controllers = require('./Controllers');
var accountSid = 'ACCOUNT_SID';
var authToken = 'AUTH_TOKEN';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/*', controllers.get);
app.post('/sms', (req, res) => {
  client.messages.create({
    body: req.body.data,
    to: 'PHONE_NUMBER',
    from: 'TWILIO#'
  })
  .then((message) => console.log(message.sid));
})

/**
 *


 */

http.createServer(app).listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

// app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}`);
// });