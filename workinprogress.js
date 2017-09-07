<!-- <% playlists.forEach((playlist) => { %> -->
<!--One Playlist -->
<!-- <div class="row">
  <div class="col-sm-9">
    <div class="margin-top-20">
      <span class="bold">Playlist Name: </span><span><%= playlist.name %></span>
    </div>
    <% artists.forEach((artist) => { %>
      <div class="col-sm-9">
        <div class="margin-top-20">
          <span class="bold">Artist/Band Name: </span><span><%= artist.name %></span>
        </div>
        <div>
          <span class="bold">Genre: </span><span><%= artist.genre %></span>
        </div>
        <div>-->
          <!-- <span class="bold">Songs: </span><span><%= artist.songs.forEach((song)=>{ %>

          <% }) %></span> -->
        <!-- </div>
    <% }); %>
</div> -->
<!--One Playlist -->
<!-- <% }); %> -->
<!--Add Wine Modal-->

<!-- Modal -->
<div class="modal fade" id="playlistModal" tabindex="-1" role="dialog" aria-labelledby="playlistModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <!-- modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="playlistModalLabel">Playlist Creator</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Name your Playlist</p>
        <form>
          <input type="text">
          <input type="submit">
        </form>
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>
