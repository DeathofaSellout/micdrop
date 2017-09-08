const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  // The "todo" in this callback function represents the document that was found.
  // It allows you to pass a reference back to the client in case they need a reference for some reason.

  //coming from req.params.id  //params comes from url
  console.log(req.params);
  Playlist.findOneAndRemove({ _id: req.params.id }, function(err, foundPlaylist) {
    console.log("delete working");
    // action.children
    res.redirect("/");
  });
  // Wine.destroy = (id) => {
  //     return request({
  //         method: "DELETE",
  //         uri: "http://myapi-profstream.herokuapp.com/api/d3397e/wines/" + id
  //     });
}
