document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("Resume").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se abra la página por defecto

    // Simular un clic en el enlace para iniciar la descarga
    var link = document.createElement("a");
    link.href = "JeremiasAvero.pdf"; // Asegúrate de que sea la ruta correcta
    link.download = "JeremiasAvero-Resume-CV.pdf";
    link.click();
  });

  let mainContainer = document.getElementById("main");
  let btn = document.getElementById("nav-res-btn");

  btn.addEventListener("click", () => {
    // Toggle visibility using a class
    mainContainer.classList.toggle("hidden");
  });
});
// let mainContainer = document.getElementById("main");
// let btn = document.getElementById("nav-res-btn");
// btn.addEventListener("click", () => {
//   console.log("hola");
//   if (
//     mainContainer.style.display === "none" ||
//     mainContainer.style.display === ""
//   ) {
//     mainContainer.style.display = "block"; // or "inline" or any other valid display value
//   } else {
//     mainContainer.style.display = "none";
//   }
// });
