

//crearTablero();
//crearEspacios();

var divCanvas = document.createElement("div");
var tablero = document.createElement("canvas");
var divLetras = document.createElement("div");
var espacios = [];

function crearTablero(){
    tablero.width = 1200;
    tablero.height = 800;
    var pincel = tablero.getContext('2d');

    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 1200, 800);

    divCanvas.appendChild(tablero);
    document.body.appendChild(divCanvas);
}


function dibujarHorca(paso){

    var pincel = tablero.getContext('2d');
    pincel.fillStyle = 'black';
    pincel.lineWidth = 6;

    //console.log(paso);

    switch (paso) {
        case 0: // Base
            pincel.beginPath();
            pincel.moveTo(500,790);
            pincel.lineTo(700,790);
            pincel.moveTo(600,790);
            pincel.lineTo(600,10);
            pincel.lineTo(900,10);
            pincel.lineTo(900,100);
            pincel.stroke();            
            break;
    
        case 1: // Cabeza
            pincel.beginPath();
            pincel.arc(900,150,50,0,2*3.14);
            pincel.stroke(); 
            break;
        
        case 2: //Tronco
            pincel.beginPath();
            pincel.moveTo(900,200);
            pincel.lineTo(900,400);
            pincel.stroke();
            break;

        case 3: // Pierna izquierda
            pincel.beginPath();
            pincel.moveTo(900,400);
            pincel.lineTo(800,650);
            pincel.stroke();
            break;

        case 4: // Pierna derecha
            pincel.beginPath();
            pincel.moveTo(900,400);
            pincel.lineTo(1000,650);
            pincel.stroke();
            break;

        case 5: // Brazo izquierdo
            pincel.beginPath();
            pincel.moveTo(900,300);
            pincel.lineTo(800,100);
            pincel.stroke();           
            break;

        case 6: // Brazo derecho
            pincel.beginPath();
            pincel.moveTo(900,300);
            pincel.lineTo(1000,100);
            pincel.stroke();
            break;

        default:
            break;
    }
}