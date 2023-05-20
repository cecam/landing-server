const mongoose = require('mongoose');

const useSchema = mongoose.Schema({
    fullname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    
})