const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err)); //Could also use the async-await structure here.
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v') //Select is used to select different columns. The "- underscore v" is saying don't include the version. Mongo has the version included by default.
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //This creates a new user.
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
};
