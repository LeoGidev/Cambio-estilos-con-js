//Cambia los estilos
document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('sideMenu').classList.toggle('show');
  });
  
  const options = document.querySelectorAll('.option');
  
  options.forEach(option => {
    option.addEventListener('click', function() {
      const color = this.getAttribute('data-color');
      
      
      // Obtiene todos los elementos con la clase 'contenido'
      var contenidos = document.querySelectorAll('.contenido');
     
      
      // Itera sobre cada elemento 'contenido' y aplica los cambios
      contenidos.forEach(function(contenido) {
        // Elimina todas las clases existentes relacionadas con los colores
        contenido.classList.remove('dark', 'red', 'blue', 'white');
        
        // Agrega la clase correspondiente al color seleccionado
        contenido.classList.add(color);
      });
    });
  });