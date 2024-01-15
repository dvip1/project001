const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
        set: value => bcrypt.hashSync(value, 10) // hash the password before storing
    },
    birthday: Date,
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    profession: String,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema)

