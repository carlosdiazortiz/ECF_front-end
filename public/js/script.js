const openMenu = document.getElementById("burger-icon");

openMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  showMenu();
  });

function showMenu() {
  document.getElementById("openmenu").classList.toggle("show");
  document.getElementById("burger-icon").classList.toggle("notshow");
  document.getElementById("x-icon").classList.toggle("showxicon");
}

const closeMenu = document.getElementById("notshowmenu");

closeMenu.addEventListener("click", notShowMenu);

function notShowMenu() {
  let menu = document.getElementById("openmenu");
  let iconChange = document.getElementById("x-icon");
  let burgerBack = document.getElementById("burger-icon");
  
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      iconChange.classList.remove('showxicon');
      burgerBack.classList.toggle('notshow');
    }
}

  



 