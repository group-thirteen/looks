const Models = require('./models.js');

const getImg = (req, callback) => {
  Models.getImg(req, (err, allImageUrls) => {
    if (err) {
      console.log('Model error retrieving urls', err);
    } else {
      callback(null, allImageUrls);
    }
  });
};

module.exports = { getImg };
