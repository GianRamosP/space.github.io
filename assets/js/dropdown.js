function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  var dropbtn = document.getElementById("dropbtn");
  
  if (dropdownContent.classList.contains("show")) {
    dropdownContent.classList.remove("show");
    dropbtn.style.display = "block";
  } else {
    dropdownContent.classList.add("show");
    dropbtn.style.display = "none";
  }
}

// Cierra el contenido desplegable si se hace clic fuera de él
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        var dropbtn = document.getElementById("dropbtn");
        dropbtn.style.display = "block";
      }
    }
  }
});
