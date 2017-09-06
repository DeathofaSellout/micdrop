const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema ({
  artistName: String,
  genre: String,
  songs: [String]
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
