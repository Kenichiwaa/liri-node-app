
// =========================================================================================================
// Functions

// IMDB API  Function
function searchIMDB(movie){
    var request = require('request');
		var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";

    request(queryURL, function (error, response, body) {
      if ( error ) {
          console.log('Error occurred: ' + error);
          return;
      }else if (!error && response.statusCode == 200) {
        console.log("");
        console.log("=============================================================");
          console.log("Title of the movie is: " + JSON.parse(body).Title);
          console.log("Year the movie came out is: " + JSON.parse(body).Year);
          console.log("IMDB Rating of the movie is: " + JSON.parse(body).imdbRating);
          console.log("Country where the movie was produced is: " + JSON.parse(body).Country);
          console.log("Language of the movie is in: " + JSON.parse(body).Language);
          console.log("Plot of the movie is: " + JSON.parse(body).Plot);
          console.log("Actors in the movie are: " + JSON.parse(body).Actors);
          // console.log("Rotten Tomatoes Rating is: " + JSON.parse(body));
          // console.log("Rotten Tomatoes URL is: " + JSON.parse(body));
          console.log("=============================================================");
          console.log("");
      }
    }); // END request(queryURL, function (error, response, body)
} // END function movieSearch()


// Spotify API Function
function searchSpotify(track){
    var spotify = require('spotify');

    spotify.search({ type: 'track', query: track }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
        // console.log(JSON.stringify(data.tracks));
        console.log("");
        console.log("=============================================================");
        console.log(data.tracks.href);
        console.log(data.tracks.items[0].album.artists[0].name);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].album.artists[0].external_urls.spotify);
        console.log(data.tracks.items[0].album.name);
        console.log("=============================================================");
        console.log("");
    }); // END spotify.search
} // END function searchSpotify(track)


// Twitter API Function
function searchTwitter (screenName){
      var Twitter = require('twitter');
      var client = new Twitter({
        consumer_key: 'Ue1cwvsstMzCzisJ3sp1mAeaU',
        consumer_secret: 'ke2jaBhTKsYKYzKx0OhmwS6dVCXyx0tiUBOoxCqf3kvVRxP25z',
        access_token_key: '804146715070607365-HFmp7iSaYdQUKT4zOZC34V5RCNAwc9r',
        access_token_secret: 'tsn1aHhfoiVhafulcggWBr83k5gdWPsfDqvrMkBXQfPxY'
      });
      
      var params = {screen_name: screenName};

      client.get('statuses/user_timeline', params, function(error, tweets, response) {
          if (!error) {
            console.log(error);
          }

            for( var i = 0; i < 10; i++){
              console.log("");
              console.log("=============================================================");
              console.log(tweets[i].created_at);
              console.log(tweets[i].text);
              console.log("=============================================================");
              console.log("");
            }

      }); // END client.get
} // END function searchTwitter (screenName)

// =========================================================================================================
// Main Process

if (process.argv[2] === 'my-tweets'){
    var twitterHandler = process.argv[3];
    searchTwitter('elon+musk'); // Twitter Search

}else if (process.argv[2] === 'spotify-this-song'){
    var searchSong = process.argv[3];
    searchSpotify(searchSong); // Spotify Search

}else if(process.argv[2] === 'spotify-this-song' && process.argv[3] === ""){
    searchSpotify("the+sign"); // Spotify Empty Search

}else if( process.argv[2] === 'movie-this'){
    var searchMovie = process.argv[3];
    searchIMDB(searchMovie); // Moive Search

}else if( process.argv[2] === 'movie-this' && process.argv[3] === "" ){
    searchIMDB('mr+nobody');
}else {
    console.log("");
    console.log("Type out a correct path!");
    console.log("------------------------");
}
