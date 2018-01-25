const express = require('express');
const app = express();
const port = process.env.PORT || 2828;
const router = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use(express.static('client'));

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

module.exports = {
  app,
}