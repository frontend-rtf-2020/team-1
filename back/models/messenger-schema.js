  
const mongoose = require('mongoose');

const MessengerSchema = new mongoose.Schema({
  room: {
    type: String,
  },
  fromUser: {
    type: String,
  },
  toUser: {
    type: String,
  },
  message: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = messagesDB.model('User', MessengerSchema);