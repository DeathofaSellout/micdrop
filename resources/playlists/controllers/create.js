const request = require("request-promise");
const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  Playlist
  .create(req.body.wine)
  .then(() => {
    res.redirect("/playlists");
  })
  .catch((err) => {
    console.log(err);
  })
}
