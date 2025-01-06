const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const emotionRoutes = require('./routes/emotionRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/lumini', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/emotions', emotionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
