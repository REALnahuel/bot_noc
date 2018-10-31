console.log('Quien te conoce papa?!');
const Discord = require ('discord.js');
const bot = new Discord.Client();
var Twit = require('twit')
const request = require ('request');
var T = new Twit({
  consumer_key:         '0mNGYTR5fFFvpDFa83aTBCgdI',
  consumer_secret:      'vjH5uhceUzI5gPw8yCeZsmpwrW8ZrRD6wYEMmHl9AQxCqfMcsO',
  access_token:         '285461976-zhGvyyJffk1ojHRIwOqFKWqK4J2oTPmQ0xtw3DGh',
  access_token_secret:  'yzJZnejom7ThOYjIuDuQGQcz78rGVBz2p39cSbCdRz8ab'
})
var value;
bot.on('message',(message) => {
	if(message.content === '!maria') {
		message.channel.send('A quien le importa, tomatelas')
	}else if(message.content === '!emaria'){
		message.channel.send('No one cares lolol')
	}else if(message.content === '!traidor'){
		message.channel.send('TRAIDOR, BONJOOOOOO')
	}else if(message.content === '!rng'){
		message.channel.send('Estoy pensando en...' + Math.floor(Math.random()*10))
	}else if(message.content === '!frases'){
		switch (Math.floor(Math.random() * 23)){
		case 0:
		message.channel.send('Estoy haciendo eso que los agarras y se enamoran de vos')
		break;
		case 1:
		message.channel.send('Pistola de sue�o')
		break;
		case 2:
		message.channel.send('El guante lo puedo mejorar')
		break;
		case 3:
		message.channel.send('Fuloton')
		break;
		case 4:
		message.channel.send('Es que lo utilizo siempre, quiero saber si esta vez puedo utilizarlo solo')
		break;
		case 5:
		message.channel.send('Por tu culpa tuyo')
		break;
		case 6:
		message.channel.send('La mujer y el monstro')
		break;
		case 7:
		message.channel.send('Estoy rodando y me pega un cuchillo')
		break;
		case 8:
		message.channel.send('Le di en la cabeza. Le di en la cabeza 2')
		break;
		case 9:
		message.channel.send('�Por qu� me dispara de d�nde?')
		break;
		case 10:
		message.channel.send('Ahi te lo devuelvo cuando aprendas a jaguehiuasn')
		break;
		case 11:
		message.channel.send('No podias subir abajo?')
		break;
		case 12:
		message.channel.send('Hace dos minutos estaba aqu� y ahora estoy ac�')
		break;
		case 13:
		message.channel.send('La saga del GTA San Andreas')
		break;
		case 14:
		message.channel.send('Cavar para arriba')
		break;
		case 15:
		message.channel.send('Cuatro veces cuatro')
		break;
		case 16:
		message.channel.send('billy jeands')
		break;
		case 17:
		message.channel.send('�Dejaos llevar por el ritmo!')
		break;
		case 18:
		message.channel.send('Me subi al Bunker')
		break;
		case 19:
		message.channel.send('Me van a matar el DeLorean')
		break;
		case 20:
		message.channel.send('No Bonjo Si')
		break;
		case 21:
		message.channel.send('Marca registrada, ah no es copyright')
		break;
		case 22:
		message.channel.send('Ioviiii y Cawwwooolll son unos tewefonos descompuestos~')
		break;
		}
	}else if(message.content === '!8ball'){
		switch (Math.floor(Math.random() * 3)){
		case 0:
		message.channel.send('Seee')
		break;
		case 1:
		message.channel.send('Naaa')
		break;
		case 2:
		message.channel.send('Yo que se, estoy re manija')
		break;
		}
	}else if(message.content === '!cat'){
		request.get('https://api.thecatapi.com/v1/images/search?format=src&mime_types=image/gif', {

			}, function(error, response, body) {
			if(!error && response.statusCode === 200) {
				message.channel.send(response.request.uri.href);
			} else {
				console.log(error);
			}
		})
	}else if(message.content === '!dog'){
		request.get('https://api.thedogapi.com/v1/images/search?format=src&mime_types=image/gif', {

			}, function(error, response, body) {
			if(!error && response.statusCode === 200) {
				message.channel.send(response.request.uri.href);
			} else {
				console.log(error);
			}
		})
	}else if(message.content.substring(0, 5) == '!wiki'){
		if (message.content.substring(6) == ''){
			message.channel.send('Que mierda queres buscar capo?');
		}else{
			value = message.content.substring(6);
			message.channel.send('https://es.wikipedia.org/wiki/' + value );
		}
//  }else if (message.content.substring(0, 7) == '!gtweet') {
//    if (message.content.substring(7) == ''){
//			message.channel.send('Que buscas capo?');
//		}else{
//      var param = { q: message.content.substring(7), count: 5}
//      T.get('search/tweets',param, gotData);
//      function gotData(err,data,response){
//        var tweets = data.statuses;
//        for (var i = 0; i < tweets.lenght; i++){
//          console.log(tweets[i].text);
//        }
//      }
//    }
	}else if (message.content.substring(0, 6) == '!tweet') {
		if (message.content.substring(7) == ''){
			message.channel.send('Que vas a publicar capo?');
		}else{
			var tweet = {
				status: message.content.substring(7)
			}
			function tweeted(err, data, response){
				if (err){
					console.log("Alto error ameo");
				}else{
					message.channel.send('Listo el tweet');
					console.log("Listo al espiedo");
				}
			}
			T.post('statuses/update', tweet, tweeted);
		}
	}else if(message.content === '!h'){
		message.channel.send('Comandos: !maria !emaria !traidor !rng !frases !cat !dog !8ball !wiki !tweet')
	}

});
bot.login('NDg2MzMxMDQwODgxNzA0OTkz.Dm9jyQ.KVYhHZS99fqwyvGwjahhP8FaPnI')
