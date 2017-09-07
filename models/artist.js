const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/playlist_db");
//Create a new schema to model our "playlist" data
const ArtistSchema = new Schema({
    artistName: String,
    genre: String,
    songs: [String],
});
const Artist = mongoose.model("Artist", ArtistSchema);

//Export the model so we can require it later in the controllers (AKA business logic)
module.exports = Artist;
