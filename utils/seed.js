const connection = require('../config/connection');
const { User, Thought } = require('../models');

//This imports the functions for the seed data.
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

//This creates a connection to the MongoDB.
connection.once('open', async () => {
  //This prints "connected" to the console.
  console.log('connected');
  //This deletes theh entries in the collection.
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(10);

  //This creates 20 random fullnames and pushes them into the users array.
  for (let i = 0; i < 20; i++) {
    const fullname = getRandomName();
    const first = fullname.split(' ')[0];
    const last = fullname.split(' ')[1];

    users.push({
      first,
      last,
      age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  //This logs out a nice table for users and thoughts.
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete!');
  process.exit(0);
});