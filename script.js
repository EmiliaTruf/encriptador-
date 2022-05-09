var input = document.getElementById("inputTexto");
var inputMsg = document.getElementById("inputMsg");
var muñeco = document.getElementById("muñeco");

//encriptar//
var botonEncrypt = document.getElementById('btn-encriptar');
  
 botonEncrypt.addEventListener('click', 
 encriptar
);

function encriptar() {
  function encriptarTexto(input){
     let newInput='';
        let vocales = { a: 'ai' , e: 'enter',i: 'imes',o: 'ober',u: 'ufat'}
        newInput = input.replace(/a|e|i|o|u/g, (i)=> vocales[i]);
    return newInput;
  }
     inputMsg.value= encriptarTexto(input.value);
     muñeco.style.display="none";   
}
//desencriptar//

var botonDesencrypt = document.getElementById('btn-desencriptar');
  
  botonDesencrypt.addEventListener('click', 
 desencriptar
);

function desencriptar() {
  function desencriptarTexto(input){
     let newInput='';
        let vocales = { ai: 'a' , enter: 'e',imes: 'i',ober: 'o',ufat: 'u'}
        newInput = input.replace(/ai|enter|imes|ober|ufat/g, (i)=> vocales[i]);
    return newInput;
  }
     inputMsg.value= desencriptarTexto(input.value);
     var  x= document.getElementById("imgmuñeco");x.style.display = "none"; 
}



var btnCopiar = document.querySelector(".btnCopiar");

btnCopiar.addEventListener("click",function(){
    inputMsg.select();
    document.execCommand('copy');
    btnCopiar.innerHTML = '<p class="textoBoton">¡Copiado!</p>';
    alert('Texto Copiado');
});