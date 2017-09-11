const Playlist = require("../../../models/playlist");
const Track = require("../../../models/track");
module.exports = (req,res) => {
  //Step 1: Extract form data from form submission
  // split by commas. Save it as an array.
  //Step 2: Connect to Mongoose and insert data into MongoDB
  //Step 3: Redirect back to /playlists
  //newPlaylist.tracks = trackList;
  var trackList = req.body.playlist.tracks.split(',');

  console.log(trackList);
  req.body.playlist.tracks = trackList;
  const newPlaylist = new Playlist(req.body.playlist);
  newPlaylist.save((err) => {
    res.redirect("/playlists");
  });
}
