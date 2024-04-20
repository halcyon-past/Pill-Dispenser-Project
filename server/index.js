const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 8000;

const connectDB = require('./config/db');

connectDB()
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

app.use(cors());
app.use(bodyParser.json());

const medicineRoutes = require('./routes/medicineUpload');
const medicineLatestRoutes = require('./routes/medicineLatest');

app.get('/', (req, res) => {
  res.send(`Medicine app listening on port ${port}`);
});

app.use('/upload', medicineRoutes);
app.use('/latest', medicineLatestRoutes);

app.listen(port, () => {
  console.log(`Medicine app listening on port ${port}`);
});
