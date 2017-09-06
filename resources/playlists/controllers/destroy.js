const request = require("request-promise");
const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  Playlist
  .destroy(req.params.id)
  .then(() => {
    res.redirect("/playlits");
  })
  .catch((err) => {
    console.log(err);
  })
}
