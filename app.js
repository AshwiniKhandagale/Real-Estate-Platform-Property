const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const propertyRoutes = require('./routes/propertyRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Use routes for property services
app.use('/api', propertyRoutes);

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Property Service DB connected'))
  .catch((err) => console.log('Error connecting to DB', err));

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Property Service running on port ${process.env.PORT}`);
});
