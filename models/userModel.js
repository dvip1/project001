const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({    
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true, 
        unique: true
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
        type:  String,
        enum: ['male', 'female']
    },
    profession: String,
}, { timestamps: true }); // add timestamps