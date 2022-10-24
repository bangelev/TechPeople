const mongoose = require('mongoose')
    // import mongoose from 'mongoose'

// const DB_LOCAL_URI = 'mongodb://localhost:27017/techPeople'
const DB_LOCAL_URI = process.env.DB_LOCAL_URI
    // console.log('Process', process.env.DB_LOCAL_URI)
const connectMongoDB = () => {
        // console.log(DB_LOCAL_URI)
        mongoose.connect(DB_LOCAL_URI).then((con) => {
            console.log(`Connected to local MongoDB ${con.connection.host}`)
        })
    }
    //TODO: should probably reset
    // PRODUCTION URI with IF statement
module.exports = connectMongoDB

// export default connectMongoDB