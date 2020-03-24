/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const faker = require('faker');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/products',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// each category will be an array of objects
// each object will include the image url and the price for rendering in carousel
const itemSchema = mongoose.Schema({
  username: String,
  lookDescription: String,
  likes: Number,
  lookName: String,
  bottoms: Array,
  belts: Array,
  bags: Array,
  jewelry: Array,
  outerwear: Array,
  shoes: Array,
  tops: Array,
});

const Item = mongoose.model('Item', itemSchema);

// take in array of objects, returns array of objects
// create array of objects
const createObjArray = (itemList) => {
  const objArray = itemList.map((item) => ({
    id: `${item.ETag.substring(3, item.ETag.length - 2)}`,
    url: `https://hrsf126-looks-fec.s3-us-west-1.amazonaws.com/${item.Key}`,
    price: `$${faker.commerce.price()}`,
  }));

  return objArray;
};

// create a new array of x random items from parent array
const chooseX = (x, array) => {
  const set = new Set();
  while (set.size < 3) {
    const randomIndex = Math.floor(Math.random() * (array.length - 1));
    set.add(array[randomIndex]);
  }

  const newArray = Array.from(set);
  return newArray;
};

// create new db entry
const seedDb = (callback) => {
  fs.readFile(path.join(__dirname, 'fakeData.json'), 'utf8', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const itemObj = {};
      const nestedArray = JSON.parse(result);

      const categories = [
        'bottoms',
        'shoes',
        'tops',
        'belts',
        'jewelry',
        'bags',
        'outerwear',
      ];

      const randomData = {
        username: faker.internet.userName(),
        likes: Math.floor(Math.random() * 7),
        lookDescription: faker.lorem.sentence(),
        lookName: faker.random.words().toUpperCase(),
      };

      Object.assign(itemObj, randomData);

      for (let i = 0; i < categories.length; i += 1) {
        itemObj[categories[i]] = chooseX(3, createObjArray(nestedArray[i]));
      }

      const item = new Item(itemObj);

      item.save((error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Successful write of item ${item._id}`);
          callback(null, data);
        }
      });
    }
  });
};

module.exports = { seedDb };
