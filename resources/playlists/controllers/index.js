const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  Playlist.find({}, (err, playlistData) => {
    res.render("index", {
      playlists: playlistData
    });
  });
}
