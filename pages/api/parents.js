import Game from '../../models/game'

// const connectMongoDB = require('../config/connectMongoDB')
import connectMongoDB from '../../config/connectMongoDB'
// const Game = require('../models/game')

export default async function handler(req, res) {
    const games = await Game.find()
    res.send(games)
}