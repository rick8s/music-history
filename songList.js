$(document).ready(function() {
	$.ajax({
		url: "songs.json"
}).done(function(data) {
	for (var i=0;i<data.songs.length;i++) {
		
		$("#newSongs").append("<p>" + data.songs[i].title + "</p><ul>");
		$("#newSongs").append("<li>" + data.songs[i].artist + "</li>" );
		$("#newSongs").append("<li>" + data.songs[i].album + "</li>" );
		$("#newSongs").append("<li>" + data.songs[i].genre + "</li></ul>" );
		$("#newSongs").append("  " + "<button class='remove'>Delete Song</button>")
		console.log("#newSongs");
	}
})
});


$( ".remove" ).click(function() {
  $( this ).remove();
});



$(document).ready(function() {
	$.ajax({
		url: "songs2.json"
}).done(function(data) {
	for (var i=0;i<data.songs.length;i++) {
		
		$("#nextSongs").append("<p>" + data.songs[i].title + "</p><ul>");
		$("#nextSongs").append("<li>" + data.songs[i].artist + "</li>" );
		$("#nextSongs").append("<li>" + data.songs[i].album + "</li>" );
		$("#nextSongs").append("<li>" + data.songs[i].genre + "</li></ul>" );
		$("#nextSongs").append("  " + "<button class='remove'>Delete Song</button>")
		console.log("#nextSongs");
	}
})
});

$("#more").click$( "#newSongs" ).replaceWith( $( "#nextSongs" ) );


// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.unshift("Save Me From Myself > by Christina Aquilera on the album Back to Basics");
// songs.push("Out of The Woods > by Taylor Swift on the album 1989");




// var songList = document.getElementById("newSongs");

// for (var i = 0; i < songs.length; i++) {
	
// var temp =  songs[i];
// 	temp = temp.replace(">", "-");
// 	temp = temp.replace("*", "");
// 	temp = temp.replace("@", "");
// 	temp = temp.replace("(", "");
// 	temp = temp.replace("!", "");

// 	songs[i] = "<p>" + temp + "</p>";
// }

// songList.innerHTML = songs.join("");




// var songData = [];

// for (var i=0; i<data.songs.length; i++) {
// 	songData = data.songs[i];
// }


// songData += "<div class = 'song-block'>";
// 	songData += "<h1>" + currentSong.title + "</h1>";
// 	songDate += currentSong.

	
	// contentEl.html(songData);

