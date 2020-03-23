const db = require('../database');

const categories = [
  'bottoms',
  'belts',
  'bags',
  'jewelry',
  'outerwear',
  'shoes',
  'tops',
];

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
