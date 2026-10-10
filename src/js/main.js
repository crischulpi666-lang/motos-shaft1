import '../css/style.css';
import 'flowbite';
// ================================
// CARRUSEL MOTOS SHAFT
// ================================

let motoActual = 0;

function mostrarMoto(numero) {

  const motos = document.querySelectorAll('.carrusel-item');
  const indicadores = document.querySelectorAll('.indicador');

  if (motos.length === 0) {
    return;
  }

  motoActual = numero;

  if (motoActual >= motos.length) {
    motoActual = 0;
  }

  if (motoActual < 0) {
    motoActual = motos.length - 1;
  }

  motos.forEach((moto) => {
    moto.classList.remove('activo');
  });

  indicadores.forEach((indicador) => {
    indicador.classList.remove('activo');
  });

  motos[motoActual].classList.add('activo');
  indicadores[motoActual].classList.add('activo');
}


function cambiarMoto(direccion) {
  mostrarMoto(motoActual + direccion);
}


// CAMBIO AUTOMÁTICO CADA 5 SEGUNDOS
setInterval(() => {
  cambiarMoto(1);
}, 5000);


// HACER FUNCIONES DISPONIBLES PARA LOS BOTONES
window.mostrarMoto = mostrarMoto;
window.cambiarMoto = cambiarMoto;