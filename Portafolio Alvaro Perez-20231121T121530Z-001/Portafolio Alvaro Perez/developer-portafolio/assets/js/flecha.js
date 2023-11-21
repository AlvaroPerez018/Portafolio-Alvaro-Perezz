<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Tus metaetiquetas, enlaces a estilos, etc. van aquí -->
</head>
<body>
  <!-- Contenido de tu página va aquí -->

  <!-- Agrega este bloque al final del cuerpo del HTML -->
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");
      desplazarArriba.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    });
  </script>
</body>
</html>
