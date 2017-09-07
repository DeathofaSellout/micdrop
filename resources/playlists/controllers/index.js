const Playlist = require("../../../models/playlist");

module.exports = (req, res) => {
  //Pull from MongoDB
  //Insert MongoDB records into index.ejs
  Playlist.find({}, (err, playlistData) => { //research mongoose find
    console.log(playlistData);

    res.render("index", { //where is render coming from?
      playlists: playlistData,
    });
  });
}
