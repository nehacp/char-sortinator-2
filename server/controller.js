const word = {
  post: (req, res) => {
    console.log('here with word', req.query); 
    res.send('testing');
  }
}

module.exports.word = word;