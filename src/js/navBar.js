/**BARRA DE BUSQUEDA DESPLEGABLE CON ICONO */
document.addEventListener("DOMContentLoaded", (event) => {
  const desplegable = document.getElementById("contenedorVentanasDesplegables");
  const botonLupa = document.getElementById("botonLupa");
  const botonInicio2 = document.getElementById("botonInicioSesion");

  const barraDesplegableBusqueda = () => {
    if (desplegable.innerHTML.trim() === "") {
      desplegable.innerHTML = `
<form class="max-w-md my-a mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search products or Categories" required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
            `;
    } else {
      desplegable.innerHTML = "";
    }
  };

  botonLupa.addEventListener("click", barraDesplegableBusqueda);

  /**VENTANA FLOTANTE DE INICIO DE SESION */
  const iconoPersona = document.getElementById("botonSesion");

  const desplegarVentana = () => {
    /**antes de crear el html creo el link para importan mi estilo animado :) */
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/src/css/fondoPagina.css";

    desplegable.innerHTML = `
        <section id="ventanaFlotante" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="flex flex-col items-center justify-center  px-6 py-5 mx-auto md:h-screen lg:py-0">
            <div
                class=" relative w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 nav-animated-bg   dark:border-emerald-300">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <button id="btnCerrar" class="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your
                                email</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required="">
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-white border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required="">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#"
                                class="text-sm font-medium text-cyan-300 hover:underline dark:text-cyan-300">Forgot
                                password?</a>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-primary-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                            in</button>
                        <p class="text-sm font-light text-white dark:text-white ">
                            Don’t have an account yet? <a href="#"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
 

            `;
    // Añadir el evento de clic para cerrar la ventana flotante
    document.getElementById("btnCerrar").addEventListener("click", () => {
      desplegable.innerHTML = "";
    });
  };

  iconoPersona.addEventListener("click", desplegarVentana);
  botonInicio2.addEventListener("click", desplegarVentana);
});
