function GenerateFooterIndex() {
    const FooterIndex = `<div id="footerDivOne"><!--footerDivOne servirá para aplicar flex-box y styles únicamente a esta sección-->
    <span>
        <a href="Index.html">
            <img src="Images/Camvi_Logo.jpeg" width="50px" class="footerLogo" alt="">
            <!--footerLogo aplica estillos a todos los logos en el footer-->
            Camvi
        </a>
    </span>
    <span>
        <a href="Pages/Catálogo.html">Catálogo</a>
        ~
        <a href="Pages/Reserva de sesiones.html">Reserva de sesiones</a>
    </span>
    <span>
        <a href="#"><img src="Images/Instagram_logo.png" alt="" class="footerLogo"></a>
        <a href="#"><img src="Images/logo-facebook.webp" alt="" class="footerLogo"
                style="background-color: white;"></a>
        <a href="#"><img src="Images/X_logo.png" alt="" class="footerLogo"></a>
    </span>
</div>
<div>
    Camvi Copyright © 2024 - Derechos Reservados || Diseñado por TechnoVision
</div> `;

    return FooterIndex
}