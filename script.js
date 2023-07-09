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
var sobre = document.getElementById("sobre_text");
var integ = document.getElementById("int_text");
var contato = document.getElementById("contato_text");

dropdown_btn[0].addEventListener("click",function(event){if(clicou==false){mostrar("block");clicou=true;}else{clicou=false;mostrar("none");}},false);
document.getElementsByName("sobre")[0].addEventListener("click",function(event){document.getElementsByClassName("capa")[0].style.display="none";
sobre.style.display="block";
integ.style.display="none";
contato.style.display="none";
clicou=false;
mostrar("none");
},false);

document.getElementsByName("home")[0].addEventListener("click",function(event){document.getElementsByClassName("capa")[0].style.display="flex";
sobre.style.display="none";
integ.style.display="none";
contato.style.display="none";
clicou=false;
mostrar("none");
},false);

document.getElementsByName("integrantes")[0].addEventListener("click",function(event){document.getElementsByClassName("capa")[0].style.display="none";
sobre.style.display="none";
integ.style.display="block";
contato.style.display="none";
clicou=false;
mostrar("none");
},false);

document.getElementsByName("contato")[0].addEventListener("click",function(event){document.getElementsByClassName("capa")[0].style.display="none";
sobre.style.display="none";
integ.style.display="none";
contato.style.display="block";
clicou=false;
mostrar("none");
},false);
