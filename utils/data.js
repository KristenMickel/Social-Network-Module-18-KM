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

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      username: Math.random() < 0.5,
      thoughtText: getRandomArrItem(thoughtTextBodies),
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

module.exports = { getRandomName, getRandomThoughts, getRandomThoughts };
