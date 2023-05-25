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

  // Agregar la clase 'active' al enlace 'moonLink' por defecto
  moonLink.classList.add('active');

  // Enfocar el enlace 'moonLink' al cargar la página
  moonLink.focus();

  // Escuchar el evento clic en cada enlace de opción
  moonLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado de redireccionamiento

    // Si moonLink no tiene la clase 'active', realizar el cambio de opción y contenido
    if (!moonLink.classList.contains('active')) {
      // Llamar a las funciones de cambio de opción y contenido
      changeOption('moon', 'moon');
      showContent(moonContent);

      // Agregar la clase 'active' al enlace 'moonLink' y removerla de los demás enlaces
      moonLink.classList.add('active');
      marsLink.classList.remove('active');
      europaLink.classList.remove('active');
      titanLink.classList.remove('active');
    }
  });

  marsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado de redireccionamiento

    // Si marsLink no tiene la clase 'active', realizar el cambio de opción y contenido
    if (!marsLink.classList.contains('active')) {
      // Llamar a las funciones de cambio de opción y contenido
      changeOption('mars', 'mars');
      showContent(marsContent);

      // Agregar la clase 'active' al enlace 'marsLink' y removerla de los demás enlaces
      moonLink.classList.remove('active');
      marsLink.classList.add('active');
      europaLink.classList.remove('active');
      titanLink.classList.remove('active');
    }
  });

  europaLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado de redireccionamiento

    // Si europaLink no tiene la clase 'active', realizar el cambio de opción y contenido
    if (!europaLink.classList.contains('active')) {
      // Llamar a las funciones de cambio de opción y contenido
      changeOption('europa', 'europa');
      showContent(europaContent);

      // Agregar la clase 'active' al enlace 'europaLink' y removerla de los demás enlaces
      moonLink.classList.remove('active');
      marsLink.classList.remove('active');
      europaLink.classList.add('active');
      titanLink.classList.remove('active');
    }
  });

  titanLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado de redireccionamiento

    // Si titanLink no tiene la clase 'active', realizar el cambio de opción y contenido
    if (!titanLink.classList.contains('active')) {
      // Llamar a las funciones de cambio de opción y contenido
      changeOption('titan', 'titan');
      showContent(titanContent);

      // Agregar la clase 'active' al enlace 'titanLink' y removerla de los demás enlaces
      moonLink.classList.remove('active');
      marsLink.classList.remove('active');
      europaLink.classList.remove('active');
      titanLink.classList.add('active');
    }
  });
});
