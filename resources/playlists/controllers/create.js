const Playlist = require("../../../models/playlist");

module.exports = (req,res) => {
  // return res.json(req.body.playlist);

  //Step 1: Extract form data from form submission
  //Step 2: Connect to Mongoose and insert data into MongoDB
  //Step 3: Redirect back to /playlists
  const newPlaylist = new Playlist(req.body.playlist);

  newPlaylist.save((err) => {
    res.redirect("/playlists");
  });
}
