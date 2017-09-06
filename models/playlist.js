// where we setup our data requests to db
const mongoose = require("mongoose");
const Schema = mongoose.schema;

mongoose.connect("mongodb://localhose/playlist_db");

let Artist = require("./artist");

const playlistSchema = new Schema({
  playlistName: String,
  artist: [Artist.Schema],
})


module.exports = Playlist;
