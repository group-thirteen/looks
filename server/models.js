const db = require('../database');

const getImg = (req, callback) => {
  db.readDb((err, allImageUrls) => {
    if (err) {
      console.log('database error', err);
    } else {
      callback(null, allImageUrls);
    }
  });
};

module.exports = { getImg };
