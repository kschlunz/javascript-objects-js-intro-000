var playlist = new Object ({Bolton: "I can go the distance"});


function updatePlaylist(playlist, artistName, songTitle){

  return Object.assign({}, playlist, { [artistName]: songTitle })

}
