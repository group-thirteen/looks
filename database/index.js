const mongoose = require('mongoose');
const DataGen = require('./dataGenerator.js');

mongoose.connect('mongodb://localhost/products',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const itemSchema = mongoose.Schema({
  id: Number,
  bottoms: Array,
  belts: Array,
  bags: Array,
  jewelry: Array,
  outerwear: Array,
  shoes: Array,
  tops: Array,
});

const Item = mongoose.model('Item', itemSchema);

// take in data.Contents
const createObjArray = (itemList) => {
  const randomPrice = (Math.random() * 300 + 200);
  const objArray = itemList.map((item) => ({ url: `https://hrsf126-looks-fec.s3-us-west-1.amazonaws.com/${item.Key}`, price: `${randomPrice}` }));

  return objArray;
};

const bucketInfo = {
  Bucket: 'hrsf126-looks-fec',
  Prefix: 'fec-imagery/shoes',
};

DataGen.getUrls(bucketInfo, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(createObjArray(data.Contents));
  }
});

const saveItem = (itemList) => {
  itemList.forEach((item) => {
    const itemDoc = new Item({
      category: item.category,
      imgurl: item.catImg,
    });

    itemDoc.save((err, res) => {
      if (err) {
        console.log('Error writing item to database', err);
      } else {
        console.log('Successful write to db', res);
      }
    });
  });
};

module.exports = { saveItem };
