const perfilCard = document.querySelector('.perfil-card');
const nombre = perfilCard.querySelector('h2');
const ocupacion = perfilCard.querySelector('p');

let esMasculino = true;

perfilCard.addEventListener('click', () => {
  if (esMasculino) {
    nombre.textContent = ' Teresa Espinosa Luna';
    ocupacion.textContent = 'Desarrolladora Web';
    alert('¡Perfil cambiado al femenino!');
  } else {
    nombre.textContent = 'Jaime Navarro Rios';
    ocupacion.textContent = 'Desarrollador Web';
    alert('¡Perfil cambiado al masculino!');
  }
  esMasculino = !esMasculino;
});