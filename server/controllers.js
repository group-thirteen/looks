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

const updateLikes = (req, callback) => {
  Models.updateLikes(req, (err, successMsg) => {
    if (err) {
      console.log('Model error liking look', err);
    } else {
      callback(null, successMsg);
    }
  });
};

module.exports = { getImg, updateLikes };
