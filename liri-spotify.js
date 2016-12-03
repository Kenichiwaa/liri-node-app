var spotify = require('spotify');
var trackSearch = 'hotel+california';

spotify.search({ type: 'track', query: trackSearch }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data.tracks.href)
    console.log(data.tracks.items[0].album.artists[0].name);
    console.log(data.tracks.items[0].name);
    console.log(data.tracks.items[0].album.artists[0].external_urls.spotify);
    console.log(data.tracks.items[0].album.name);
});
