// where we setup our data requests to db
const request = require("request-promise");

let Playlist = {};

Playlist.getAll = () => {
  return request ({
    uri: "",
    method: "GET",
    json: true
  })
}

Playlist.create = (playlistData) => {
  return request ({
    uri: "",
    method: "POST",
    body: playlistData,
    json: true
  })
}

Playlist.getOne = (id) => {
  return request({
    method: "GET",
    uri: "",
    json: true
  })
}

Playlist.update = (id, playlistData) => {
  return request ({
    method: "PUT",
    uri: "",
    body: playlistData,
    json: true
  })
}

Playlist.destroy = (id) => {
  return request ({
    method: "DELETE",
    uri: "",
    json: true
  })
}

module.exports = Playlist;
