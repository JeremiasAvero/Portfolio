document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("Resume").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se abra la página por defecto

    // Simular un clic en el enlace para iniciar la descarga
    var link = document.createElement("a");
    link.href = "JeremiasAveroCV.pdf"; // Asegúrate de que sea la ruta correcta
    link.download = "JeremiasAvero-Resume-CV.pdf";
    link.click();
  });
  document.getElementById("c1").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se abra la página por defecto

    // Simular un clic en el enlace para iniciar la descarga
    var link = document.createElement("a");
    link.href = "certificates/UC-c7f3fc3a-e682-441c-9a40-67a493766ea5.pdf"; // Asegúrate de que sea la ruta correcta
    link.download = "UC-c7f3fc3a-e682-441c-9a40-67a493766ea5.pdf";
    link.click();
  });
  document.getElementById("c2").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se abra la página por defecto

    // Simular un clic en el enlace para iniciar la descarga
    var link = document.createElement("a");
    link.href = "certificates/UC-4410041b-5a96-4e3c-8655-8ee8f3f0cf12.pdf"; // Asegúrate de que sea la ruta correcta
    link.download = "UC-4410041b-5a96-4e3c-8655-8ee8f3f0cf12.pdf";
    link.click();
  });
  document.getElementById("c3").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se abra la página por defecto

    // Simular un clic en el enlace para iniciar la descarga
    var link = document.createElement("a");
    link.href = "certificates/UC-3903b2ac-618f-4c67-b5fe-dea7ef54732a.pdf"; // Asegúrate de que sea la ruta correcta
    link.download = "UC-3903b2ac-618f-4c67-b5fe-dea7ef54732a.pdf";
    link.click();
  });
  document.getElementById("c4").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se abra la página por defecto

    // Simular un clic en el enlace para iniciar la descarga
    var link = document.createElement("a");
    link.href = "certificates/cmp3.pdf"; // Asegúrate de que sea la ruta correcta
    link.download = "Certificado C# Nivel 3 Jeremías Avero.pdf";
    link.click();
  });
  document.getElementById("c5").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se abra la página por defecto

    // Simular un clic en el enlace para iniciar la descarga
    var link = document.createElement("a");
    link.href = "certificates/cmp2.pdf"; // Asegúrate de que sea la ruta correcta
    link.download = "Certificado C# Nivel 2 Jeremías Avero.pdf";
    link.click();
  });

  document.getElementById("c6").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se abra la página por defecto

    // Simular un clic en el enlace para iniciar la descarga
    var link = document.createElement("a");
    link.href = "certificates/cmp1.pdf"; // Asegúrate de que sea la ruta correcta
    link.download = "Certificado C# Nivel 1 Jeremías Avero.pdf";
    link.click();
  });

  let mainContainer = document.getElementById("main");
  let btnMenu = document.getElementById("nav-res-btn");

  btnMenu.addEventListener("click", () => {
    // Toggle visibility using a class
    mainContainer.classList.toggle("hidden");
  });

  let enlaces = document.getElementsByClassName("enlace");

  // Iterar sobre la colección de elementos y agregar event listener a cada uno
  for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", () => {
      location.href = `index.html#${enlaces[i].id}`;
      mainContainer.classList.toggle("hidden");
    });
  }
});
