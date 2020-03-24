const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Controllers = require('./controllers.js');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get('/api/getimageurls', (req, res) => {
  Controllers.getImg(req, (err, allImageUrls) => {
    if (err) {
      console.log('Controller error retrieving urls', err);
    } else {
      res.send(allImageUrls);
    }
  });
});
