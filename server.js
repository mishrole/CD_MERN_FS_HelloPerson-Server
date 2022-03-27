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

app.use(cors());

// Routes
require('./server/routes/person.routes')(app);

app.listen(port, () => {
  console.log(`listening on port ${port}`);       
});