var board = document.querySelector('.board-js');
var centinel = true;
var count = 0;
var winner = false;
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var s4 = document.getElementById('s4');
var s5 = document.getElementById('s5');
var s6 = document.getElementById('s6');
var s7 = document.getElementById('s7');
var s8 = document.getElementById('s8');
var s9 = document.getElementById('s9');

window.onload = function(){
  board.addEventListener('click',addX);
  document.getElementById("button").addEventListener("click", reset);
}
function addX(event){
  if(event.target.matches('td') && event.target.textContent === ''){
    if(centinel){
      event.target.textContent = "X";
      centinel= false;
      count++;
    }else{
      event.target.textContent = "O";
      centinel= true;
      count++;
    }
  }
  if (count >= 5 && count <= 9) {
      win();
    }
    if (count >= 9 && winner === false) {
      document.getElementById('result').innerHTML = '¡¡EMPATE!! ';
    }
}

function win() {
  if ((s1.textContent === 'X' && s2.textContent === 'X' && s3.textContent === 'X') ||
	 (s4.textContent === 'X' && s5.textContent === 'X' && s6.textContent === 'X') ||
	 (s7.textContent === 'X' && s8.textContent === 'X' && s9.textContent === 'X') ||
	 (s1.textContent === 'X' && s4.textContent === 'X' && s7.textContent === 'X') ||
     (s2.textContent === 'X' && s5.textContent === 'X' && s8.textContent === 'X') ||
     (s3.textContent === 'X' && s6.textContent === 'X' && s9.textContent === 'X') ||
     (s1.textContent === 'X' && s5.textContent === 'X' && s9.textContent === 'X') ||
     (s3.textContent === 'X' && s5.textContent === 'X' && s7.textContent === 'X')) {
	 document.getElementById('result').innerHTML = 'Ganador: X ';
	 count = 10;
    winner = true;
    // Situaciones en las que ganaría O:
  } else if ((s1.textContent === 'O' && s2.textContent === 'O' && s3.textContent === 'O') ||
	 (s4.textContent === 'O' && s5.textContent === 'O' && s6.textContent === 'O') ||
	 (s7.textContent === 'O' && s8.textContent === 'O' && s9.textContent === 'O') ||
	 (s1.textContent === 'O' && s4.textContent === 'O' && s7.textContent === 'O') ||
     (s2.textContent === 'O' && s5.textContent === 'O' && s8.textContent === 'O') ||
     (s3.textContent === 'O' && s6.textContent === 'O' && s9.textContent === 'O') ||
     (s1.textContent === 'O' && s5.textContent === 'O' && s9.textContent === 'O') ||
     (s3.textContent === 'O' && s5.textContent === 'O' && s7.textContent === 'O')) {
    document.getElementById('result').innerHTML = 'Ganador: O ';
    count = 10;
    winner = true;
  }
}

function reset(){
  window.location.reload();
}
