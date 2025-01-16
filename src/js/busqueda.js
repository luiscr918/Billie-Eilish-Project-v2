document.addEventListener("DOMContentLoaded", (event) => {
  const contenedorBusqueda = document.getElementById("resultado");
  const botonBuscar = document.getElementById("btnBuscar");

  const buscar = () => {
    contenedorBusqueda.innerHTML = `
    <p class="text-black">hola como estas </p>
    `;
  };
  botonBuscar.addEventListener("click", buscar);
});
