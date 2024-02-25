document.addEventListener('DOMContentLoaded', function()
{
   const contenedorMenu = document.getElementById('Footer');
   const MenuHTML = GenerateFooterIndex();

   contenedorMenu.innerHTML = MenuHTML;

   
});