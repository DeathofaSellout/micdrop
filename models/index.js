mongoose.connect(process.env.MONGODB_URI || "monogodb://localhost/playlist_db", {useMongoClient: true});
