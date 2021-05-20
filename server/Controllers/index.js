const models = require('../Models');

module.exports = {
  get: (req, res) => {
    // const endpoint = req.originalUrl.slice(4);
    return models.getAll(req.originalUrl)
      .then((data) => res.status(200).send(data.data))
      .catch((err) => res.status(400).send(err));
  }
};