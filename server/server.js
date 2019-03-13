
var express     = require('express');
var cors        = require('cors');
var bodyParser = require('body-parser'); // parser JSON

/**
 * ------------------- Configuracion Interface Hardware
 */
var five        = require("johnny-five");
var board = new five.Board({
  port: "/dev/cu.usbmodem14101"
});


/**
 * ------------------- Configuracion Led
 */
var led = false;
let led13_flag = false;
let led12_flag = false;
let led8_flag = false;
let led7_flag = false;

/**
 * API REST CREATION AND CONFIGURATION
 */
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * ------------------- Configuracion API REST
 */

app.get('/', function (req, res) {
  res.status(200).json( '{"status":"Hello World!"}' );
});

app.get("/allled", function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.end( JSON.stringify({ status: changeLedStatus() }) );
  console.log('> Led Status: ', led)
});

app.get("/ledA", function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.end( JSON.stringify({ status: changeLed( led13_flag, 13 ) }) );
  led13_flag = !led13_flag;
  console.log('> Led Status: ', led)
});

app.get("/ledB", function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.end( JSON.stringify({ status: changeLed( led12_flag, 12 ) }) );
  led12_flag = !led12_flag;
  console.log('> Led Status: ', led)
});

app.get("/ledC", function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.end( JSON.stringify({ status: changeLed( led8_flag, 8 ) }) );
  led8_flag = !led8_flag;
  console.log('> Led Status: ', led)
});

app.get("/ledD", function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.end( JSON.stringify({ status: changeLed( led7_flag, 7 ) }) );
  led7_flag = !led7_flag;
  console.log('> Led Status: ', led)
});


/**
 * Validación de Flag 'All' leds
 */
function changeLedStatus(){
  led = !led;
  led12_flag = !led12_flag;
  led13_flag = !led13_flag;
  led8_flag = !led8_flag;
  led7_flag = !led7_flag;
  changeAllStatus(led);
  return led;
}

/**
 * -------------------
 */
function changeAllStatus( _status ){
  if ( _status ){
    let led_12 = new five.Led(12).on();
    let led_13 = new five.Led(13).on();
    let led_8 = new five.Led(8).on();
    let led_7 = new five.Led(7).on();
    led12_flag = true;
    led13_flag = true;
    led8_flag = true;
    led7_flag = true;
  } else {
    let led_12 = new five.Led(12).off();
    let led_13 = new five.Led(13).off();
    let led_8 = new five.Led(8).off();
    let led_7 = new five.Led(7).off();
    led12_flag = false;
    led13_flag = false;
    led8_flag = false;
    led7_flag = false;
  }
}



function changeLed( _status, _pin ){
  console.log('>> Change Led status: ' + _status + ' pin: ' + _pin );
  if ( _status ) {
    let led = new five.Led(_pin).off();
  } else {
    let led = new five.Led(_pin).on();
  }
}


/**
 * ------------------------------------------- STARTING SERVER -------------------------------------------------
 */

function starServer(){
  app.listen(3434, function () {
    console.log(" =================== "); 
    console.log("NodeDuino Server v1.0"); 
    console.log(" =================== "); 
    console.warn('> Listening on port 3434!');
  });
}

board.on('ready', starServer);


app.use(function(req, res, next){
  res.status(404).send('Sorry, resource not found :( ');
})
 