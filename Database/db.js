const mongoose = require("mongoose")
const mongoDB_url = process.env.MONGODB_URL

mongoose.connect(mongoDB_url)
mongoose.connection.on('connected', res => {
    console.log('Connected', res);
})

mongoose.connection.on('error', err => {
    console.log(err);
})