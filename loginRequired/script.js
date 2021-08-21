let main = document.getElementById('main');
let login = document.getElementById('login');
let registration = document.getElementById('registration');

function loginPage(x) {
  main.style.display="none";
  x.style.display="block"
}
function back(x) {
  main.style.display="flex";
  x.style.display="none";
}

function newReg() {
  let regName = document.getElementById('regName').value;
  let regEmail = document.getElementById('regEmail').value;
  let regPassword = document.getElementById('regPassword').value;
  let regPassword2 = document.getElementById('regPassword2').value;
  if(regPassword != regPassword2) {
    alert('A két jelszó nem egyezik!')
  }
  alert('Name: '+regName+'\r\nEmail: '+ regEmail +'\r\nPassword: '+regPassword+'\r\nPassword2: '+regPassword2);
  
}