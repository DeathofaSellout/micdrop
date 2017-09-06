const request = require("request-promist");
const Playlist = require("../../../models/playlists");

module.exports = (req, res) => {
  Playlist
  .getOne(req.params.id)
  .then((playlistData) => {
    res.render("edit", {
      playlist: playlistData
    });
  })
  .catch((err) => {
    console.log(err);
  });
}
