const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    confirmed: {
        type: DataTypes.String,
        defaultValue: false
    },
    password: {
        type: String,
        required: true
    }
});

schema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('User', schema, 'users');