var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Save Me From Myself > by Christina Aquilera on the album Back to Basics");
songs.push("Out of The Woods > by Taylor Swift on the album 1989");

var songList = document.getElementById("newSongs");

for (var i = 0; i < songs.length; i++) {
	
var temp =  songs[i];
	temp = temp.replace(">", "-");
	temp = temp.replace("*", "");
	temp = temp.replace("@", "");
	temp = temp.replace("(", "");
	temp = temp.replace("!", "");

	songs[i] = temp;
}

songList.innerHTML = songs.join(" <br><br>");
