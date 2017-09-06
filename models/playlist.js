// where we setup our data requests to db
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "monogodb://localhost", {useMongoClient: true});
mongoose.Promise = global.Promise;
const Schema = mongoose.schema;

let Artist = require("./artist");

const playlistSchema = new Schema({
  playlistName: String,
  artist: [Artist.Schema],
})


module.exports = Playlist;
