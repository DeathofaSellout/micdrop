const Playlist = require("../../../models");

module.exports = (req,res) => {
  //Step 1: Extract form data from form submission
  //Step 2: Connect to Mongoose and insert data into MongoDB
  //Step 3: Redirect back to /chirps
  const newPlaylist = new Playlist({
    playlist: req.body.playlist,
  });

  newPlaylist.save((err) => {
    res.redirect("/playlists")
  });
}
