// Environment variables
const dotenv = require("dotenv");
dotenv.config();

// Express
const express = require('express');
// Cors
const cors = require('cors');
const app = express();
// Port
const port = process.env.PORT || 8000;

// Mongoose Config
require('./server/config/mongoose.config');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
require('./server/routes/person.routes')(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);       
});