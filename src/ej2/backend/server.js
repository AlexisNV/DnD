const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/images', (req, res) => {
  console.log(req.file);
  console.log(req);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
