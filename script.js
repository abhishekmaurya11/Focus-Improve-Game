'use strict';

const eleString = `
<div class="noc_ans_pl_again">
<div class="noc_ans">No of Correct Answer: 10</div>
<div class="pl_again">Play Again</div>
</div>`;

let myTimeout = setTimeout(gameEnd, 1000 * 30);
const noc_ans_pl_again = document.querySelector('.noc_ans_pl_again');
noc_ans_pl_again.style.display = `none`;
const noc__ans = document.querySelector('.noc_ans');

//////////////////////////////////
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const span = document.querySelector('span');
const s_l_number = document.querySelector('.s_l_number');
/////////////////////////////////


function gameEnd() {
  clearInterval(myVar);

  h2.style.display = `none`;
  h3.style.display = `none`;
  span.style.display = `none`;
  s_l_number.style.display = `none`;

  noc__ans.innerHTML = `No of Correct Answer: ${noc_ans}`;
  noc_ans_pl_again.style.display = `block`;

}

const hardSec = 30;
let sec = 30;
let myVar = setInterval(myTimer, 1000);
function myTimer() {
  sec--;
  console.log(sec);
  document.querySelector('h3').innerHTML = `Time Left : ${sec} Sec`;
}

let num1, num2;
const sl_Num1 = document.querySelector('.s_number');
const sl_Num2 = document.querySelector('.l_number');

const genNum = function () {
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);
  if (num1 === num2) {
    genNum();
  }
  sl_Num1.innerHTML = num1;
  sl_Num2.innerHTML = num2;

}
genNum();


let noc_ans = 0;
sl_Num1.addEventListener('click', function () {
  if (num1 > num2) {
    span.style.backgroundColor = `green`;
    noc_ans++;
  }
  else{
    span.style.backgroundColor = `red`;

  }

  genNum();

});

sl_Num2.addEventListener('click', function () {
  if (num1 < num2) {
    span.style.backgroundColor = `green`;
    noc_ans++;
  }
  else{
    span.style.backgroundColor = `red`;

  }
  genNum();

});

const playAgain = document.querySelector('.pl_again');

playAgain.addEventListener('click', function () {
  console.log("hihihi");

  noc_ans_pl_again.style.display = `none`;
  h2.style.display = `block`;
  h3.style.display = `block`;

  span.style.backgroundColor = `white`;
  span.style.display = `block`;
  s_l_number.style.display = `block`;

  genNum();
  sec = hardSec;
  myVar = setInterval(myTimer, 1000);
  myTimeout = setTimeout(gameEnd, 1000 * 30);

  noc_ans = 0;
});