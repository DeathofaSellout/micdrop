const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  // The "todo" in this callback function represents the document that was found.
  // It allows you to pass a reference back to the client in case they need a reference for some reason.
  Playlist.findByIdAndRemove(req.params.playlistId, (err, playlist) => {
      // We'll create a simple object to send back with a message and the id of the document that was removed
      // You can really do this however you want, though.
      let response = {
          message: "Playlist successfully deleted",
      };
      res.redirect("/");
  });
}
