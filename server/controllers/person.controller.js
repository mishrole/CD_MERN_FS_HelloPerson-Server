const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
  response.json({
    message: 'Hello World!'
  });
}

// Create a new person
module.exports.createPerson = (request, response) => {
  const { firstName, lastName } = request.body;

  Person.create({
    firstName,
    lastName
  })
  .then(person => response.json({
    person: person
  }))
  .catch(err =>
    response.status(422).json({
      message: 'Something went wrong',
      error: err
    })
  );
}