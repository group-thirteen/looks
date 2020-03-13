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

const itemSchema = mongoose.Schema({
  bottoms: Array,
  belts: Array,
  bags: Array,
  jewelry: Array,
  outerwear: Array,
  shoes: Array,
  tops: Array,
});

const getUrls = (params, callback) => {
  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, data);
    }
  });
};

const Item = mongoose.model('Item', itemSchema);

// take in data.Contents
const createObjArray = (itemList) => {
  const objArray = itemList.map((item) => ({ url: `https://hrsf126-looks-fec.s3-us-west-1.amazonaws.com/${item.Key}`, price: `$${faker.commerce.price()}` }));

  return objArray;
};

// create a new array of three random items
const chooseX = (x, array) => {
  const newArray = [];
  for (let i = 0; i < x; i += 1) {
    const randomIndex = Math.floor(Math.random() * (array.length - 1));
    newArray.push(array[randomIndex]);
  }

  return newArray;
};

const categories = [
  'bottoms',
  'belts',
  'bags',
  'jewelry',
  'outerwear',
  'shoes',
  'tops',
];

const saveItem = (categoryList) => {
  const promises = categoryList.map((category) => new Promise((resolve, reject) => {
    const bucketInfo = {
      Bucket: 'hrsf126-looks-fec',
      Prefix: `fec-imagery/${category}`,
    };

    getUrls(bucketInfo, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const dataObj = {};
        const objArray = data.Contents;

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
      }
    });
  });
};

saveItem(categories);

module.exports = { saveItem };
