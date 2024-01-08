document.getElementById("Resume").addEventListener("click", function (event) {
  event.preventDefault(); // Evita que se abra la página por defecto

  // Simular un clic en el enlace para iniciar la descarga
  var link = document.createElement("a");
  link.href = "JeremiasAvero.pdf"; // Asegúrate de que sea la ruta correcta
  link.download = "JeremiasAvero-Resume-CV.pdf";
  link.click();
});
