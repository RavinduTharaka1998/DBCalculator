const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Member = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collation: 'member'
});

module.exports = mongoose.model('Member',Member);