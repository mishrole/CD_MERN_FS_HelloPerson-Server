const mongoose = require('mongoose');
const database = 'hellopeople';

mongoose.connect(`mongodb://localhost/${database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Established a connection to the databse'))
.catch(err => console.log('Something went wrong when connection to the database', err));