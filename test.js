
// Basado en el tutorial de:
// http://untitled.es/arduino-nodejs-johnny-five/

// incluimos la libreria j5
var five = require("johnny-five");
var rlSync = require('readline-sync');

var boardVelConfiguration = [{
    type: 'input',
    name: 'name',
    message: "Cual es la velocidad?",
}]

var boardPinConfiguration = [{
    type: 'input',
    name: 'name',
    message: "Cual es el Pin?",
}]
  



configure();

function configure() {

    var velocidad = rlSync.question('velocidad? ');
    var pin = rlSync.question('Pin? ');

    console.log('Velocidad: '+ velocidad + ' pin: ' + pin )

  /*
    rl.question('Configurar VELOCIDAD: ', (_input) => {
        console.log('Nueva velocidad:   ', _input );
        _velocidad = _input
        rl.pause();
    })
    rl.question('Configurar PIN: ', (_input) => {
        console.log('Nueva velocidad:   ', _input );
        _pin = _input
        rl.pause();
    })
    */
    /*
    if ( _velocidad == undefined || _pin == undefined ){
        console.error('UNDEFINED COSITAS: vel: '+ _velocidad + ' pin: ' + _pin  ); 
    } else {
        loop(_velocidad, _pin);
    }
    */
    
}

/**
 * Función 'MAIN' 
 * @param {*} _velocidad 
 * @param {*} _pin 
 */
function loop( _velocidad, _pin){

    var board = new five.Board({
        port: "/dev/cu.usbmodem14101"
    });

    board.on("ready", function() {
        var led_13 = new five.Led(13);
        led_13.blink(500);

        var led_12 = new five.Led(12);
        led_12.blink(500);

        var led_8 = new five.Led(8);
        led_8.blink(500);

        var led_7 = new five.Led(7);
        led_7.blink(500);
    });

}
