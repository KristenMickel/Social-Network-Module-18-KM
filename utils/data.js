const names = [
  'Jim',
  'James',
  'Joan',
  'John',
  'Joe',
  'Julie',
  'Smith',
  'Brown',
  'Thomas',
  'Doe',
  'Harrison',
  ``,
];

const usernames = [
  'Username1',
  'Username2',
  'Username3',
  'Username4',
  'Username5'
]

const thoughtTextBodies = [
  'Thought 1',
  'Thought 2',
  'Thought 3',
  'Thought 4',
  'Thought 5',
];

const possibleReactions = [
  'Reaction 1!',
  'Reaction 2!',
  'Reaction 3!',
  'Reaction 4!',
  'Reaction 5!',
];

const users = [];

//This gets a random item given an array.
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

//This function generates random thoughts given a number.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      username: usernames,
      thoughtText: getRandomArrItem(thoughtTextBodies),
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

//This creates the Reactions that will be added to each Thought.
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: usernames,
    });
  }
  return results;
};

//This exports the functions needed in the seed.js file.
module.exports = { 
  getRandomName, 
  getRandomThoughts
 };
