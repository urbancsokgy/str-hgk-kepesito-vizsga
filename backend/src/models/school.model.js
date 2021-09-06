const mongoose = require('mongoose')

const SchoolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true        
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
   
    classrooms: [string]
},
    {
        timestamps: true
    },
    { versionKey: false})

const School = mongoose.model('School', SchoolSchema, 'Schools');

module.exports = School;
 