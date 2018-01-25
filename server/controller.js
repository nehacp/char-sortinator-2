const helpers = require('./helpers');

const word = {
  post: (req, res) => {
    let result = helpers.sortDescending(req.body.word);
    res.status(201).json(result);
  }
}

module.exports.word = word;