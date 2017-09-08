const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
  // Find the existing resource by ID
  Playlist.findById(req.params.id, (err, playlist) => {
      // Handle any possible database errors
      if (err) {
          res.status(500).send(err);
      } else {
          // Update each attribute with any possible attribute that may have been submitted in the body of the request
          // If that attribute isn't in the request body, default back to whatever it was before.
          playlist.name = req.body.name || playlist.name;
          playlist.tracks = req.body.tracks || playlist.tracks;
          playlist.description = req.body.description || playlist.description;
          // Save the updated document back to the database
          playlist.save((err, playlist) => {
              if (err) {
                  res.status(500).send(err)
              }
              res.status(200).send(playlist);
          });
      }
  });
}
