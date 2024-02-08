const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const contentRoutes = require('./routes/contentRoutes');
const PORT = process.env.PORT || 8000;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/evallo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use(cors())
app.use(bodyParser.json());
app.use('/api/content', contentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});