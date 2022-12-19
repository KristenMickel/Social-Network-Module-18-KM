const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

//This is the schema to create the Thought model.
const thoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true, //Set virtuals to true when creating the schema.
    },
    id: false,
  }
);

//This creates a virtual property `reactionCount` that gets the amount of reactions per thought.
//Use .virtual method to create it and give it the name of the virtual. Then, use .get to define how to retrieve it.
//A virtual is a property that will be available when you create a new post, but it's not something that you are saving in the database.
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
