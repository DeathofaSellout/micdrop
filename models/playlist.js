// where we setup our data requests to db
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "monogodb://localhost", {useMongoClient: true});
mongoose.Promise = global.Promise;
const Schema = mongoose.schema;

const playlistSchema = new Schema({
  playlistName: String,
  artist: artistSchema,
})


module.exports.Playlist = require("./playlist.js"
