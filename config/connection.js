const { connect, connection } = require('mongoose');

//This wraps Mongoose around the local connection to the MongoDB database.
connect('mongodb://localhost/thoughtsAndReactions', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//This exports the connection.
module.exports = connection;