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
  console.log(req.query.id);
  Controllers.getImg(req.query.id, (err, allImageUrls) => {
    if (err) {
      console.log('Controller error retrieving urls', err);
    } else {
      res.send(allImageUrls);
    }
  });
});

app.post('/api/updateLikes', (req, res) => {
  Controllers.updateLikes(req.body, (err, successMsg) => {
    if (err) {
      console.log('Controller error retrieving urls', err);
    } else {
      res.send(successMsg);
    }
  });
});
