const db = require('../database');

const getImg = (req, callback) => {
  db.readDb(req, (err, allImageUrls) => {
    if (err) {
      console.log('database error', err);
    } else {
      callback(null, allImageUrls);
    }
  });
};

const updateLikes = (req, callback) => {
  console.log('Model', req);
  db.updateLikes(req, (err, successMsg) => {
    if (err) {
      console.log('Could not update look document', err);
    } else {
      callback(null, successMsg);
    }
  });
}

module.exports = { getImg, updateLikes };
