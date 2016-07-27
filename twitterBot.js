var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'jDtoeXv7e5AFpxwXOWgjYPpC3',
  consumer_secret: '6DH42jACx3lc0aucyW25mucClsy9qQzLAHfwtRN9ncOgGSZ7iH',
  access_token_key: '24048591-tGAvvMMKph1VdTjKFPMWORPVFqjihldzHB0c2pKzx',
  access_token_secret: '1uXU4iXhvuAmITG6JZ0GElmW5pcrJc2QNeHWLcdAB8sao'
});
 
client.get('search/tweets', {q: '#GOT'}, function(error, tweets, response){
		[].forEach.call(tweets.statuses,function(e){
			console.log(e.text);
		})
});
