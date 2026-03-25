//Keep the database uri in the .env file.

const mongoose = require("mongoose")

const db_dev = process.env.DB_URI
 
mongoose.connect(db_dev)

let db = mongoose.connection

db.on('error', console.error.bind(console, "[[[Database connection error]]]"))
db.once('open',()=>{
    console.log("[[ Database Connected Successfully ]]")
})


module.exports = db