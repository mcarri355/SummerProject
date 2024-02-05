let index = document.getElementById('indexBody');
let camping = document.getElementById('campingBody');
let game = document.getElementById('gameBody');
let job = document.getElementById('jobBody');
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

function indexSwap() {
  if (counter1 % 2 == 0) {
    index.style.backgroundImage = 'url(././photos/index2.jpg)';
  }
  if (counter1 % 2 == 1) {
    index.style.backgroundImage = 'url(././photos/index1.png)';
  }
  counter1++;
}

function campSwap() {
  if (counter2 % 2 == 0) {
    index.style.backgroundImage = 'url(../../photos/camping1.jpg)';
  }
  if (counter2 % 2 == 1) {
    index.style.backgroundImage = 'url(../../photos/camping2.jpg)';
  }
  counter2++;
}

function gameSwap() {
  if (counter3 % 2 == 0) {
    index.style.backgroundImage = 'url(././photos/game1.jpg)';
  }
  if (counter3 % 2 == 1) {
    index.style.backgroundImage = 'url(././photos/game2.png)';
  }
  counter3++;
}

function jobSwap() {
  if (counter4 % 2 == 0) {
    index.style.backgroundImage = 'url(././photos/job1.png)';
  }
  if (counter4 % 2 == 1) {
    index.style.backgroundImage = 'url(./../../photos/job2.png)';
  }
  counter4++;
}
