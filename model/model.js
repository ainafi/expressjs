
const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Define the model before using it
const blogSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    sub: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const myblog = mongoose.model('myblogs', blogSchema); // Define the model
module.exports=myblog
