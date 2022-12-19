const { Schema, model } = require('mongoose');

//This is the schema to create the User model.
const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      //validate: [ isEmail, 'invalid email' ] //Not working.
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', //This is supposed to be a self-reference, but I do not think I implemented it correctly.
      },
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//This creates a virtual property `friendCount` that gets the amount of friends per user.
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;

