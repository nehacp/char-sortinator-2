const helpers = require('./helpers');

const word = {
  post: (req, res) => {
    let result = helpers.sortDescending(req.body.word);
    res.status(201).json({word: req.body.word, sorted: result});
  }
}

module.exports.word = word;