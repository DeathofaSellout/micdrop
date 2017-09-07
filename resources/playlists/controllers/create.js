const Playlist = require("../../../models/playlist");

module.exports = (req,res) => {
  // return res.json(req.body.playlist);

  //Step 1: Extract form data from form submission
  //Step 2: Connect to Mongoose and insert data into MongoDB
  //Step 3: Redirect back to /playlists
  const newPlaylist = new Playlist(req.body.playlist); //where is playlist defined? How would I know to use it?

  newPlaylist.save((err) => { //what is this save method from? Mongoose?
    res.redirect("/playlists")// what is redirect?
  });
}
