// 1 - require mongoose 
const mongoose = require("mongoose");

// 2 - create schema :
const schema = mongoose.Schema

const userSchema = new schema ({
    name : { 
        type: String,
        required : true, 
    },

    email : { 
        type: String,
        required : true, 
        unique : true,
    },

    phone : Number, 
        
    
});

module.exports = User = mongoose.model("user", userschema);