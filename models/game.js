// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    description: {
        type: String,
        required: [true, 'Please enter a short description'],
        maxLength: 100,
    },
    instructions: {
        type: String,
        required: [true, 'Please enter instructions'],
    },
    category: {
        type: [String],
        enum: [
            'indoors',
            'outdoors',
            'family',
            'kids',
            'Curiosita',
            'Dimostrazione',
            'Sensaione',
            'Sfumato',
            'Arte/Scienca',
            'Corporalita',
            'Connessione',
        ],
        required: [true, 'Please select category-ies'],
    },
    typeOfUser: {
        type: String,
        enum: ['children', 'family', 'both'],
        required: [true, 'Choose category'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    props: {
        type: [String],
        // required: true,
    },
    proxPlayingTime: {
        type: Number,
        required: [true, 'Please enter proximate time for playing the game'],
    },
    minAge: {
        type: Number,
        required: [true, 'Please enter min age for playing this game'],
    },
    //   user, images, ratings & reviews - TODO'S
    //   numOfReviews: {
    //     type: Number,
    //     default: 0,
    //   },
    //   reviews: [
    //     {
    //       user: {
    //         type: mongoose.Schema.ObjectId,
    //         ref: 'user',
    //         required: true,
    //       },
    //       name: {
    //         type: String,
    //         required: true,
    //       },
    //       comment: {
    //         type: String,
    //         required: true,
    //       },
    //       rating: {
    //         type: Number,
    //         default: 0,
    //       },
    //     },
    //   ],
    //   user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'user',
    //     required: true,
    //     },
    //   ratings: {
    //     type: Number,
    //     default: 0,
    //   },
    //   images: [
    //     {
    //       public_id: {
    //         type: String,
    //         required: true,
    //       },
    //       url: {
    //         type: String,
    //         required: true,
    //       },
    //     },
    //   ],
})
mongoose.models = {}
    // module.exports = mongoose.model('Game', gameSchema) || mongoose.model.Games
const game = mongoose.model.Games || mongoose.model('Game', gameSchema)
export default game

// for seeding the base
// module.exports = mongoose.model('Game', gameSchema)