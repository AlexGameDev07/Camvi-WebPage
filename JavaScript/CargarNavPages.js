document.addEventListener('DOMContentLoaded', function()
{
   const contenedorMenu = document.getElementById('Header');
   const MenuHTML = GenerateNavPages();

   contenedorMenu.innerHTML = MenuHTML;

   
});