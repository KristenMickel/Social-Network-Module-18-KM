const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = getRandomUsername(5);
  const thoughts = getRandomThoughts(5);

  await User.collection.insertMany(users);
  await Thoughts.collection.insertMany(videos);

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete!');
  process.exit(0);
});