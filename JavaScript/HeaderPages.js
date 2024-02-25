//Agregar código para insertar Header & Footer
function GenerateNavPages() {
    const NavPages = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="../Index.html">
            <img src="../Images/Camvi_Logo.jpeg" alt="Logo" width="30" style="border-radius: 50%;"
                class="d-inline-block align-text-top">
            Camvi
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="../Index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../Pages/Catálogo.html">Catálogo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../Pages/Reserva de sesiones.html">Reservar sesión fotográfica</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../Pages/Sobre Nosotros.html">Sobre Nosotros</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

return NavPages
}