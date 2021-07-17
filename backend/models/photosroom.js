const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photosroomSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imagePath: { type: String },
    description: { type: String },
}, {
    collection: 'photos'
})

module.exports = mongoose.model('Photos', photosroomSchema)