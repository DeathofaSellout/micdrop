
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Atist = require('./artist');
//Connect Mongoose to MongoDB
mongoose.connect("mongodb://localhost/playlist_db");

//Create a new schema to model our "playlist" data
const PlaylistSchema = new Schema({
  playlistName = String,
  artists: [Artist.schema],
});

const Playlist = mongoose.model("Playlist", PlaylistSchema);
//Export the model so we can require it later in the controllers (AKA business logic)
=======
// where we setup our data requests to db
module.exports = Playlist;
