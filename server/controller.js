const helpers = require('./helpers');

const word = {
  post: (req, res) => {
    let result = helpers.sortDescending(req.query.word);
    res.status(201).send(result);
  }
}

module.exports.word = word;