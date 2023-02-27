const connectMongoDB = require('../config/connectMongoDB')
const Game = require('../models/game')
    // import Game from '../models/game'
    // import { connectMongoDB } from '../config/connectMongoDB'

const gameData = require('./game.json')
    // import gameData from './game.json'

connectMongoDB()
const seedingMongo = async() => {
    try {
        await Game.deleteMany()

        console.log('Deleted many')
        await Game.insertMany(gameData)
        console.log('Products inserted')
        process.exit()
    } catch (error) {
        console.log('Error while inserting')
        console.log(error)
        process.exit()
    }
}

seedingMongo(gameData)