var express     = require('express');
var cors        = require('cors');
var bodyParser  = require('body-parser'); // parser JSON
var five        = require("johnny-five");

/**
 * Configuracion de Board Arduino
 */
var board = new five.Board();

/**
 * API REST CREATION AND CONFIGURATION
 */
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res) {
  res.status(200).json( '{"status":"Hello World!"}' );
  cambiarMensaje('');
});

app.get('/love', function (req, res) {
  res.status(200).json( '{"status":"in Love!"}' );
  console.log( 'Mensaje: ', req.query.msg )
  cambiarMensaje( req.query.msg );
});


function cambiarMensaje( _input ) {
  var lcd = new five.LCD({ pins: [7, 8, 9, 10, 11, 12] });
  lcd.print( _input );
}



/**
 * ------------------------------------------- STARTING SERVER -------------------------------------------------
 */

function starServer(){
  app.listen(3434, function () {
    console.log("-===================-"); 
    console.log(" Argüino Server v1.0 "); 
    console.log("-===================-"); 
    console.warn('> Listening on port 3434!');
  });
}

board.on('ready', starServer);

app.use(function(req, res, next){
  res.status(404).send('No se que buscas muchacho, pero no está aqui');
})