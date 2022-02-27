

// Banco de palabras
var palabras = ['alura','latam','oracle','programacion','javascript','html','css'];
var palabra = "";
var numLetras = 0;
var acertadas = 0;
var contador = 0;
var divLetras = document.createElement("div");
var espacios = [];
var inputPalabra = document.querySelector("#input-nueva-palabra");

var btnAgregarPalabra = document.querySelector("#nueva-palabra");
btnAgregarPalabra.addEventListener("click",function(event){
    event.preventDefault();
    var palabra = inputPalabra.value;

    palabras.push(palabra);
    //console.log(palabras);
})


// Selecciona el boton de iniciar juego y le agrega el evento
var btnIniciar = document.querySelector("#iniciar-juego");
btnIniciar.addEventListener("click",function(event){
    divLetras.innerHTML = "";
    event.preventDefault();

    document.addEventListener("keydown",verificarEntrada);
    
    // Elige una palabra al azar y la divide en un array con el metodo split
    palabra = elegirPalabra().split('');
    numLetras = palabra.length;
    //console.log(palabra);

    crearTablero();

    // Crear los espacios necesarios segun la palabra elegida
    crearEspacios(palabra.length);
});

function elegirPalabra(){
    var palabra = palabras[Math.floor(Math.random() * palabras.length)];
    return palabra;
}

function verificarEntrada(event){
    var tecla = event.key;
    var letra = tecla.toString();

    if (letra.length > 1) {
        return;
    }

    // Usando expresiones regulares
    var validar = new RegExp("[A-Z]");

    // Si no coincide los oculta
    // Si lo que se escribe no es parte del nombre
     if(validar.test(letra)){
        //console.log(letra + " Es una letra");
        letra = letra.toLowerCase();
        //console.log(letra);

        buscarLetra(letra);

     }else{
         return;
         //console.log("No es una letra");
     }
}

function buscarLetra(letra){
    
    var encontrada = false;
    // Comprueba si se encuentra en la palabra
    for(var pos = 0 ; pos < palabra.length ; pos++){
        if(letra == palabra[pos].toLowerCase()){
            //console.log("Esta dentro de la palabra, posicion: " + pos);
            dibujarLetra(letra, pos);
            encontrada =  true;
            acertadas++;
            verificarGanador(acertadas);
        }
    }

    if(!encontrada){
        if (!finDelJuego(contador)) {
            espacios[espacios.length - 1].textContent = "¡FIN DEL JUEGO!";
            location.reload();
            return;
        }else{
            dibujarLetraIncorrecta(letra);
            dibujarHorca(contador);
            contador++;
        }
        
    }
}

function dibujarLetra(letra, posicion){ 
    espacios[posicion].textContent = letra;
    espacios[espacios.length - 2].textContent = "*"; 
}

function dibujarLetraIncorrecta(letra){ 
    espacios[espacios.length - 2].textContent = letra; 
    espacios[espacios.length - 1].textContent = "Intentos erroneos: " + (contador+1);
}

function crearEspacios(numero){
    
    
    for(var i = 0; i < numero ; i++){
        
        var labelEmpty = document.createElement("label");
        labelEmpty.classList.add("labelEmpty");
        labelEmpty.textContent = "   ";
        var label = document.createElement("label");
        label.classList.add("label");
        label.textContent = "?";

        espacios.push(label);

        divLetras.appendChild(label);
        divLetras.appendChild(labelEmpty);

        document.body.appendChild(divLetras);

    }

    // Para mostrar letra incorrecta
    var labelIncorrecta = document.createElement("label");
    labelIncorrecta.classList.add("labelIncorrecta");
    labelIncorrecta.textContent = "*";


    var labelEmpty = document.createElement("label");
    labelEmpty.classList.add("labelEmpty");
    labelEmpty.textContent = " ";

    var labelIncorrectaN = document.createElement("label");
    labelIncorrectaN.classList.add("labelIncorrecta");
    labelIncorrectaN.textContent = "Intentos erroneos: ";

    espacios.push(labelIncorrecta);
    espacios.push(labelIncorrectaN);
    divLetras.appendChild(labelIncorrecta);
    divLetras.appendChild(labelEmpty);
    divLetras.appendChild(labelIncorrectaN);
    document.body.appendChild(divLetras);
    
}

function finDelJuego(contador) {
    if(contador > 6){
        return false;
    }else{
        return true;
    }
}

function verificarGanador(){
    if(acertadas == numLetras){
        espacios[espacios.length - 1].classList.remove("labelIncorrecta");
        espacios[espacios.length - 1].classList.add("labelGanador");
        espacios[espacios.length - 1].textContent = "¡GANASTE!";
        location.reload();
        return;
    }else{
        return;
    }
}

function agregarPalabra(){

}