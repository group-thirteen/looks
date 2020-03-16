/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const AWS = require('aws-sdk');
const faker = require('faker');

mongoose.connect('mongodb://localhost/products',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

AWS.config.update({ region: 'us-west-1' });

// each category will be an array of objects
// each object will include the image url and the price for rendering in carousel
const itemSchema = mongoose.Schema({
  bottoms: Array,
  belts: Array,
  bags: Array,
  jewelry: Array,
  outerwear: Array,
  shoes: Array,
  tops: Array,
});

const Item = mongoose.model('Item', itemSchema);

// interface with S3 to get image urls
const getUrls = (params, callback) => {
  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, data);
    }
  });
};

const categories = [
  'bags',
  'belts',
  'bottoms',
  'jewelry',
  'outerwear',
  'shoes',
  'tops',
];

// take in data.Contents
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

// function to create documents and write to db
const saveItem = (categoryList, callback) => {
  const promises = categoryList.map((category) => new Promise((resolve, reject) => {
    const bucketInfo = {
      Bucket: 'hrsf126-looks-fec',
      Prefix: `fec-imagery/${category}`,
    };

    // s3 call to get all imageData from AWS
    getUrls(bucketInfo, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const dataObj = {};
        const objArray = data.Contents;

        console.log(data.Contents);

        dataObj[category] = chooseX(3, createObjArray(objArray));
        resolve(dataObj);
      }
    });
  }));

  Promise.all(promises).then((values) => {
    const itemObj = {};
    values.forEach((property) => {
      Object.assign(itemObj, property);
    });

    const item = new Item(itemObj);

    item.save((err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Successful write of item ${item._id}`);
        callback(null, result);
      }
    });
  });
};

// uncomment to seed database
// saveItem(categories, () => {
//   console.log('success');
// });

module.exports = { saveItem };
