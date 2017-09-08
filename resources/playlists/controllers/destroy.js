const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  //params comes from url
  Playlist.findOneAndRemove({ _id: req.params.id }, function(err, foundPlaylist) {
    res.redirect("/");
  });
}
