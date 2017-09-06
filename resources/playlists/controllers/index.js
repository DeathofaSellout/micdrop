const request = require("request-promise");
const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  Playlist
  .getAll()
  .then((playlistData) => {
    res.render("index", {
      playlists: playlistData
    });
  });
  .catch((err) => {
    console.log(err);
  });
}
