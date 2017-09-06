// where we setup our data requests to db
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "monogodb://localhost", {useMongoClient: true});
mongoose.Promise = global.Promise;


module.exports.Playlist = require("./playlist.js"
