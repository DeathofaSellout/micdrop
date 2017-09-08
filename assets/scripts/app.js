// $(document).ready(function(){
//   $("#edit-playlist-modal").on("click", function(){
//     $.ajax({
//       method: "GET",
//       uri: "/playlists" + req.params.id
//     })
//
//   })
//     $('#playlists').on('click', '#delete-playlist', handleDeletePlaylistClick);
//     $('#albums').on('click', '.edit-album', handleAlbumEditClick);
//     $('#albums').on('click', '.save-album', handleSaveChangesClick);
//
// })
//
// // / after editing an album, when the save changes button is clicked
// // function handleSaveChangesClick(e) {
// //   var albumId = $(this).parents('.album').data('album-id'); // $(this).closest would have worked fine too
// //   var $albumRow = $('[data-album-id=' + albumId + ']');
// //
// //   var data = {
// //     name: $albumRow.find('.edit-album-name').val(),
// //     artistName: $albumRow.find('.edit-artist-name').val(),
// //     releaseDate: $albumRow.find('.edit-album-releaseDate').val()
// //   };
// //   console.log('PUTing data for album', albumId, 'with data', data);
// //
// //   $.ajax({
// //     method: 'PUT',
// //     url: '/api/albums/' + albumId,
// //     data: data,
// //     success: handleAlbumUpdatedResponse
// //   });
// // }
// //
// // function handleAlbumUpdatedResponse(data) {
// //   console.log('response to update', data);
// //
// //   var albumId = data._id;
// //   // scratch this album from the page
// //   $('[data-album-id=' + albumId + ']').remove();
// //   // and then re-draw it with the updates ;-)
// //   renderAlbum(data);
// //
// //   // BONUS: scroll the change into view ;-)
// //   $('[data-album-id=' + albumId + ']')[0].scrollIntoView();
// // }
//
// function handleDeletePlaylistSuccess(data) {
//   var deletedPlaylistId = data._id;
//   console.log('removing the following album from the page:', deletedPlaylistId);
//   $('div[data-playlist-id=' + deletedPlaylistId + ']').remove();
// }
//
// function handleDeletePlaylistClick(e) {
//   var playlistId = $(this).parents('.playlist').data('playlist-id');
//   console.log('someone wants to delete playlist id=' + playlistId );
//   $.ajax({
//     url: '/api/playlists/' + playlistId,
//     method: 'DELETE',
//     success: handleDeletePlaylistSuccess
//   });
// }
// // function handleAlbumEditClick(e) {
// //   var $albumRow = $(this).closest('.album');
// //   var albumId = $albumRow.data('album-id');
// //   console.log('edit album', albumId);
//
//   // show the save changes button
//   // $albumRow.find('.save-album').toggleClass('hidden');
//   // hide the edit button
//   // $albumRow.find('.edit-album').toggleClass('hidden');
//
//   // get the album name and replace its field with an input element
//   // var albumName = $albumRow.find('span.album-name').text();
//   // $albumRow.find('span.album-name').html('<input class="edit-album-name" value="' + albumName + '"></input>');
//
//   // get the artist name and replace its field with an input element
//   // var artistName = $albumRow.find('span.artist-name').text();
//   // $albumRow.find('span.artist-name').html('<input class="edit-artist-name" value="' + artistName + '"></input>');
//
//   // get the releasedate and replace its field with an input element
// //   var releaseDate = $albumRow.find('span.album-releaseDate').text();
// //   $albumRow.find('span.album-releaseDate').html('<input class="edit-album-releaseDate" value="' + releaseDate + '"></input>');
// // }
