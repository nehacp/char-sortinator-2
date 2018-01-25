const word = {
  post: (req, res) => {
    console.log('here with word', req.body.word); 
  }
}

module.exports.word = word;