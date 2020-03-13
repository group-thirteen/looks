const AWS = require('aws-sdk');

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

AWS.config.update({ region: 'us-west-1' });

const bucketInfo = {
  Bucket: 'hrsf126-looks-fec',
  Prefix: 'fec-imagery/shoes',
};

const getUrls = (params, callback) => {
  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, data);
    }
  });
};

getUrls(bucketInfo, (err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log(results.Contents);
  }
});

module.exports = { getUrls };
