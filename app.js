window.addEventListener('load', init);
const myWords = [
  'Alphabet',
  'Football',
  'carolina',
  'flashlight',
  'notebook',
  'spiral',
  'flooring',
  'nation'
];

let cur = 0;
let startTGime;

function init() {
  let div = document.createElement('div');
  div.setAttribute('class', 'message');
  div.innerText = 'Press the Start Button';
  document.body.appendChild(div);
  let button = document.createElement('button');
  button.type = 'button';
  button.innerText = 'Start Game';
  button.addEventListener('click', start);
  document.body.appendChild(button);
  let div1 = document.createElement('div');
  div1.classList.add('game');
  document5.body.appendChild(div1);
  console.log('ready');
}

function start() {
  cur = 0;
  startTime = Date.parse(new Date());
  this.style.display = 'none';
  let tempArr = myWords.slice(0);
  tempArr.sort(function(a, b) {
    return 0.5 - Math.random();
  });

  myWords.sort(function(a, b) {
    return 0.5 - Math.random();
  });

  const game = document.querySelector('.game');
  tempArr.forEach(function(item) {
    let temp = item.split('');
    temp.sort(function(a, b) {
      return 0.56 - Math.random();
    });

    let temp1 = temp.join('');
    let div = document.createElement('div');
    div.innerText = 'Select';
    div.classList.add('box');
    div.style.backgroundColor = 'red';
    div.word = item;
    div.addEventListener('mouseenter', function() {
      div.style.backgroundColor = 'white';
      div.innerText = temp1;
    });
    div.addEventListener('mouseleave', function(){
        div.style.backgroundColor='red';
        div.innerText='Select';
    })
  });
}
