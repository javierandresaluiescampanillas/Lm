/* FUNCIONES DE PRESENTACIÓN DE HALLOWEEN CURSO 2020-21 */
function mostrar(identificador){
    document.getElementById(identificador).style.visibility="visible";
}
function ocultar(identificador){
    document.getElementById(identificador).style.visibility="hidden";
}
function sonar(sonido){
    document.getElementById(sonido).play();
}
function parar(sonido){
    document.getElementById(sonido).pause();
}