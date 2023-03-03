const btn0 = document.querySelector('.div17');
const btn1 = document.querySelector('.div13');
const btn2 = document.querySelector('.div14');
const btn3 = document.querySelector('.div15');
const btn4 = document.querySelector('.div9');
const btn5 = document.querySelector('.div10');
const btn6 = document.querySelector('.div11');
const btn7 = document.querySelector('.div5');
const btn8 = document.querySelector('.div6');
const btn9 = document.querySelector('.div7');
const btndot = document.querySelector('.div19');

const acbtn = document.querySelector('.div1');
const btnplus = document.querySelector('.div16');
const btnpercent = document.querySelector('.div3');


const res = document.querySelector('.result');


let arraychick = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9]


arraychick.forEach(function(element) {
  element.addEventListener("click", function() {
    let btninner = element.innerText
    res.innerText += btninner
  });
})

acbtn.addEventListener('click', () => {
  res.innerText = null
  commaCount = 0
})


btn0.addEventListener('click', () => {
  if (res.innerHTML == 0) {
    
  } else {
    res.innerText += btn0.innerHTML
  }
})

let commaCount = 0;

btndot.addEventListener('click', () => {
  if (commaCount === 0) {
    if (res.innerHTML == '') {
      res.innerHTML = '0,';
    } else {
      res.innerText += ',';
    }
    commaCount++;
  }
});



// bug============================================================

btnpercent.addEventListener('click', () => {
  if (res.innerHTML == '') {

  } else {
    res.innerHTML /= 100
  }
})

// bug============================================================


btnplus.addEventListener('click', () => {
  if (res.innerHTML == '') {

  } else {
    
  }
})