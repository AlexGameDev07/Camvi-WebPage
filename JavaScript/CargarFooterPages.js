document.addEventListener('DOMContentLoaded', function()
{
   const contenedorMenu = document.getElementById('Footer');
   const MenuHTML = GenerateFooterPages();

   contenedorMenu.innerHTML = MenuHTML;

   
});