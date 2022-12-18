const usernames = [
    'Jim',
    'Joe',
    'John',
    'Jane',
    'Julie',
    ``,
  ];
  
  const thoughtTextBodies = [
    'My first thought',
    'My second thought',
    'My third thought',
    'My fourth thought',
    'My fifth thought',
  ];
  
  const reactionBodies = [
    'Me too one!',
    'Me too two!',
    'Me too three!',
    'Me too four!',
    'Me too five!',
  ];
  
  const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomUsername = () =>
    `${getRandomArrItem(usernames)} ${getRandomArrItem(usernames)}`;
  
  // Function to generate random videos that we can add to the database. Includes video responses.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtTextBodies),
        reactions: [...getThoughtReactions(5)],
      });
    }
    return results;
  };
  
  // Create the responses that will be added to each video
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(reactionBodies);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactionBodies),
        username: getRandomUsername(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsername, getRandomThoughts };