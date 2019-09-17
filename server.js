const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./db');

// Load env
dotenv.config({ path: './config.env' });

// Init app
const app = express();

// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Route definitions
app.use('/api/v1/test', require('./routes/apiv1/test'));
app.use('/api/v1/clocks', require('./routes/apiv1/clocks'));

// Handle production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public'));
}

// Init port
const port = process.env.PORT || 8000;

// Start listening for requests
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
