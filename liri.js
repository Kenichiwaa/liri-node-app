
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
// =========================================================================================================
// Twitter API
if (process.argv[2] === 'my-tweets'){

      var Twitter = require('twitter');

      var client = new Twitter({
        consumer_key: 'Ue1cwvsstMzCzisJ3sp1mAeaU',
        consumer_secret: 'ke2jaBhTKsYKYzKx0OhmwS6dVCXyx0tiUBOoxCqf3kvVRxP25z',
        access_token_key: '804146715070607365-HFmp7iSaYdQUKT4zOZC34V5RCNAwc9r',
        access_token_secret: 'tsn1aHhfoiVhafulcggWBr83k5gdWPsfDqvrMkBXQfPxY'
      });

      var screenName = 'CristianRocas';
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
            };
      });
}
// =========================================================================================================
// Spofiy API
else if (process.argv[2] === 'spotify-this-song'){

    var spotify = require('spotify');
    var track = 'hotel+california';

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
    });

}
// =========================================================================================================
else if(process.argv[2] === 'movie-this'){
// IMDB API
    var movie = "king+kong";
		var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";

    // $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    //      console.log(response);
    // });
    
    var request = require('request');
    request(queryURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
      }
    })




}
// =========================================================================================================
else {
    console.log("");
    console.log("==================================");
    console.log("Type out the path correctly dummy!");
    console.log("==================================");
    console.log("");
}
