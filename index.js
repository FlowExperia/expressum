const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', '8000');

const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`);
});
