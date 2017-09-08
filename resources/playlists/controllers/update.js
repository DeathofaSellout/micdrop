const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
  // Find the existing resource by ID
  Playlist.findById(req.params.id, (err, playlist) => {
      // Handle any possible database errors
      if(err) { console.log('playlistupdate error', err); }
          // Update each attribute with any possible attribute that may have been submitted in the body of the request
          // If that attribute isn't in the request body, default back to whatever it was before.
      console.log(req.body);    
      playlist.name = req.body.name;
      playlist.tracks = req.body.tracks;
      playlist.description = req.body.description;
      // Save the updated document back to the database
      playlist.save((err, savedPlaylist) => {
        if (err) {
            console.log("Saving edit isn't working");
        }
        res.json(savedPlaylist);
      });
  });
}
