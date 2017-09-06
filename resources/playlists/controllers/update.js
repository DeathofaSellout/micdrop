const request = require("request-promise");
const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  Playlist
  .update(req.params.id, req.body.playlist)
  .then(() => {
    res.redirect("/playlist");
  });
  .catch((err) => {
    console.log(err);
  });
}
