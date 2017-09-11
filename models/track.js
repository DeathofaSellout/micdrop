// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//
// //Connect Mongoose to MongoDB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/playlist_db");
//
// //Create a new schema to model our "playlist" data
// const TrackSchema = new Schema({
//   tracks: String,
// });
//
// const Track = mongoose.model("Track", TrackSchema);
// //Export the model so we can require it later in the controllers (AKA business logic)
// // where we setup our data requests to db
// module.exports = Track;
