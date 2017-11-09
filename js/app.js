window.onload = function(){
  var board = document.querySelector('.board-js');
board.addEventListener('click',addX);
}
var centinel = true;
function addX(event){
  if(event.target.matches('td') && event.target.textContent === ''){
    if(centinel){
      event.target.textContent = "X";
      centinel= false;
    }else{
      event.target.textContent = "O";
      centinel= true;
    }
  }
}


var button = document.getElementsByName('button');
function funcion_reiniciar(addX){
  button.removeEventListener('click', addX);
}
