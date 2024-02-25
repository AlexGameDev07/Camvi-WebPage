document.addEventListener('DOMContentLoaded', function()
{
   const contenedorMenu = document.getElementById('Header');
   const MenuHTML = GenerateNavIndex();

   contenedorMenu.innerHTML = MenuHTML;

   
});