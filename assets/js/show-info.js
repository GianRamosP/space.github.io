document.addEventListener('DOMContentLoaded', function() {
  // Obtener el elemento que contiene la imagen de arriba
  const imgMoon = document.querySelector('.img-moon');

  // Obtener los enlaces de opciones
  const moonLink = document.getElementById('moon-link');
  const marsLink = document.getElementById('mars-link');
  const europaLink = document.getElementById('europa-link');
  const titanLink = document.getElementById('titan-link');

  // Función para cambiar la imagen de fondo según la opción seleccionada
  function changeOption(option, className) {
    // Eliminar todas las clases de imagen existentes
    imgMoon.classList.remove('moon', 'mars', 'europa', 'titan');

    // Agregar la clase correspondiente a la opción seleccionada
    imgMoon.classList.add(className);
  }

  // Función para mostrar el contenido de la opción seleccionada
  function showContent(content) {
    // Ocultar todos los contenidos
    moonContent.style.display = 'none';
    marsContent.style.display = 'none';
    europaContent.style.display = 'none';
    titanContent.style.display = 'none';

    // Mostrar el contenido correspondiente a la opción seleccionada
    content.style.display = 'block';
  }

  // Obtener los contenedores de contenido
  const moonContent = document.getElementById('moon-content');
  const marsContent = document.getElementById('mars-content');
  const europaContent = document.getElementById('europa-content');
  const titanContent = document.getElementById('titan-content');

  // Establecer la opción de la luna como activa por defecto
  changeOption('moon', 'moon');
  showContent(moonContent);

  // Escuchar el evento clic en cada enlace de opción
  moonLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado de redireccionamiento

    // Llamar a las funciones de cambio de opción y contenido
    changeOption('moon', 'moon');
    showContent(moonContent);
  });

  marsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado de redireccionamiento

    // Llamar a las funciones de cambio de opción y contenido
    changeOption('mars', 'mars');
    showContent(marsContent);
  });

  europaLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado de redireccionamiento

    // Llamar a las funciones de cambio de opción y contenido
    changeOption('europa', 'europa');
    showContent(europaContent);
  });

  titanLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado de redireccionamiento

    // Llamar a las funciones de cambio de opción y contenido
    changeOption('titan', 'titan');
    showContent(titanContent);
  });
});
