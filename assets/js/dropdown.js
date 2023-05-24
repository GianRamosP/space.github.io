function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  var dropbtn = document.getElementById("dropbtn");
  var closeIcon = document.getElementById("closeIcon");
  
  dropdownContent.classList.toggle("show");
  
  if (dropdownContent.classList.contains("show")) {
    dropbtn.style.display = "none";
  } else {
    dropbtn.style.display = "block";
  }
}

// Cierra el contenido desplegable si se hace clic fuera de él
window.onclick = function(event) {
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
}
