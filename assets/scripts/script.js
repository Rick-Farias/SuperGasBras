const btn_menu = document.getElementById("btn-menu");
const home = document.getElementById("homeId");
const produtos = document.getElementById("produtosId");
const local = document.getElementById("localId");

home.addEventListener("click",()=>{
  const menu_2 = document.getElementById("nav-list-2");
  menu_2.classList.toggle("menu-on-off");
})

produtos.addEventListener("click",()=>{
  const menu_2 = document.getElementById("nav-list-2");
  menu_2.classList.toggle("menu-on-off");
})

local.addEventListener("click",()=>{
  const menu_2 = document.getElementById("nav-list-2");
  menu_2.classList.toggle("menu-on-off");
})


btn_menu.addEventListener("click", () => {
  const menu_2 = document.getElementById("nav-list-2");
  menu_2.classList.toggle("menu-on-off");

});

// Declarar variaveis

let contador = 1;
document.getElementById("slide1").checked = true;

  setInterval(function(){
    nextImage();
  } ,5000)

  function nextImage(){
    contador++;
    if(contador>5){
      contador = 1;
    }
    
    let radio = document.getElementById("slide"+contador).checked = true 
  }
