const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
<<<<<<< HEAD
  //Pull from MongoDB
  //Insert MongoDB records into index.ejs
  Playlist.find({}, (err, playlistData) => {
    res.render("index", {
      playlists: playlistData,
    });
  });
}
