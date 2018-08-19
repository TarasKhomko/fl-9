let login = prompt('Enter your login');
if (login === 'User') {
  let password = prompt('Enter your password');
  if (password === 'SuperUser') {
    if (new Date().getHours() < 20) {
      alert('Good day!');
    } else {
      alert('Good evening!');
    }
  } else if (password === null || password.length === 0) {
    alert('Canceled.');
  } else {
    alert('Wrong password');
  }
} else if (login === null || login.length === 0) {
  alert('Canceled.');
} else if (login.length < 4) {
  alert('I don`t know any users having name length less than 4 symbols');
} else {
  alert('I don’t know you');
}
