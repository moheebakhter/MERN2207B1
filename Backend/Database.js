let mongoose = require('mongoose');

require("dotenv").config();
let db_url = process.env.URL;

let db_work = async () => {
    mongoose.connect(db_url).
    then(() => {
        console.log("Connected to MongoDB")
    }).catch((e)=>{
        console.log(e)
    })
}

module.exports = db_work
