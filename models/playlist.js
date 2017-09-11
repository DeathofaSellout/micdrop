const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Connect Mongoose to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/playlist_db");

const Track = require('./track');
//Create a new schema to model our "playlist" data
const PlaylistSchema = new Schema({
  name: String,
  tracks: [String],
  //tracks: [Track.schema],
  description: String,
});

const Playlist = mongoose.model("Playlist", PlaylistSchema);
//Export the model so we can require it later in the controllers (AKA business logic)
// where we setup our data requests to db
module.exports = Playlist;
