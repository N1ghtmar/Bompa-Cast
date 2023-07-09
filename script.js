function detectar_mobile() { 
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
     return true;
   }
  else {
     return false;
   }
 }



function mostrar(tipo){
var elems = document.getElementsByClassName('dropdown-menu');
for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = tipo;
}
}

var clicou = false
var dropdown_btn = document.getElementsByName("btn1");
dropdown_btn[0].addEventListener("click",function(event){if(clicou==false){mostrar("block");clicou=true;}else{clicou=false;mostrar("none");}},false);
document.getElementsByName("sobre")[0].addEventListener("click",function(event){document.getElementsByClassName("capa")[0].style.display="none"},false);
document.getElementsByName("home")[0].addEventListener("click",function(event){document.getElementsByClassName("capa")[0].style.display="flex"},false);
