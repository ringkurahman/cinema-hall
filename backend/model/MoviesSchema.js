const mongoose = require('mongoose')


const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating can not be more than 10']
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    directedBy: {
        type: String,
    },
    showTime: {
        type: String
    },
    releaseDate: {
        type: Date
    },
    availableSeats: {
        type: Number,
        default: 40
    },
    rating: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Movie', MovieSchema)