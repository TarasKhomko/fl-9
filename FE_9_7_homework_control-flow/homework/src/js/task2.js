let m = 1;
let prizeMax = 10;
let maxLimit = 5;
let total = 0;
let one = 1;
if (confirm('Do you want to play a game?')) {
  millioner();
} else {
  alert('You did not become a millionaire, but can.');
}
function millioner() {
  let number = Math.floor(Math.random() * maxLimit);
  while (m <= 3) {
    let prize = prizeMax / Math.pow(2, m - one);
    let userNumber = prompt('Enter a number form 0 to ' + maxLimit + '\n' +
      'Attmpts left:  ' + parseInt(4 - m) +
      '\nTotal prize:' + total + '$' +
      '\nPossible prize on current attempt: ' + parseInt(prize) + '$');
   
    if (parseInt(userNumber) === parseInt(number)) {
      if (confirm('Congratulation!   Your prize is: ' + parseInt(prize + total) + '$ Do you want to continue?')) {
        prizeMax *= 3;
        maxLimit *= 2;
        total += parseInt(prize);
        m = one;
        return millioner();
      } else {
        alert('Thank you for a game. Your prize is: ' + total + '$');
        alert('You did not become a millionaire, but can.');
        break;
      }
    } else if (parseInt(userNumber) !== parseInt(number) && m === 3) {
      alert('Thank you for a game. Your prize is: ' + total + '$');
      alert('You did not become a millionaire, but can.');
    }
    m++;
  }
}
