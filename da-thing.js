var lName = document.getElementById('lastname');
var Mobile = document.getElementById('number');
var Form = document.getElementById('form');
var Email = document.getElementById('email');
var fName = document.getElementById('firstname');
var Country = document.getElementById('country');
var Dob = document.getElementById('date');
var Red1 = document.querySelector('.red1');
var Red2 = document.querySelector('.red2');
var Red3 = document.querySelector('.red3');
var Red4 = document.querySelector('.red4');
var Red5 = document.querySelector('.red5');
var Red6 = document.querySelector('.red6');


var Green1 = document.querySelector('.green1');
var Green2 = document.querySelector('.green2');
var Green3 = document.querySelector('.green3');
var Green4 = document.querySelector('.green4');
var Green5 = document.querySelector('.green5');
var Green6 = document.querySelector('.green6');


Form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs(){
  var fNameVal = fName.value;
  var lNameVal = lName.value;
  var MobileVal = Mobile.value;
  var EmailVal = Email.value;
  var CountryVal = Country.value;
  var DobVal = Dob.value;
  
 
  if (fNameVal === ''){
    setErrorFor1(fNameVal, 'Please Type your First Name.');
  }else {
    setSuccessFor1(fNameVal);
  }
  if (lNameVal === ''){
    setErrorFor2(lNameVal, 'Please Type your Last Name.');
  } else {
    setSuccessFor2(lNameVal);
  }
  if (EmailVal === '' || Email < '@'){
    setErrorFor3(EmailVal, 'Please Enter a valid Email.');
  } else {
    setSuccessFor3(EmailVal);
  }
  
  if (DobVal === ''){
    setErrorFor4(DobVal, 'Please select your Date of birth.');
  }else {
    setSuccessFor4(DobVal);
  }
  
  if(MobileVal === ''){
    setErrorFor5(MobileVal, 'Please enter a valid phone number.');
  } else {
    setSuccessFor5(MobileVal);
  }
  
  if(CountryVal === 'Select'){
    setErrorFor6(CountryVal, 'Please select a country.');
  }else{
    setSuccessFor6(CountryVal);
  }
  
  
    
  
  
  
  
}



function setErrorFor1(input, message){
var small1 = document.querySelector('#error-msg1');
  small1.innerText = message;
  fName.style.border = '1px solid red';
  Red1.classList.add('see1');
  Green1.classList.remove('look1');
  

}


function setSuccessFor1(input){
  fName.style.border = '1px solid green';
  Red1.classList.remove('see1');
  Green1.classList.add('look1');
 
}

function setErrorFor2(input, message){
  var small2 = document.querySelector('#error-msg2');
  small2.innerText = message;
  lName.style.border = '1px solid red';
  Red2.classList.add('see2');
  Green2.classList.remove('look2');
}

function setSuccessFor2(input){
  lName.style.border = '1px solid green';
  Red2.classList.remove('see2');
  Green2.classList.add('look2');

}



function setErrorFor3(input, message){
  var small3 = document.querySelector('#error-msg3');
  small3.innerText = message;
  Email.style.border = '1px solid red';
  Red3.classList.add('see3');
  Green3.classList.remove('look3');
}

function setSuccessFor3(input){
  Email.style.border = '1px solid green';
  Red3.classList.remove('see3');
  Green3.classList.add('look3');
}


function setErrorFor4(input, message){
  var small4 = document.querySelector('#error-msg4');
  small4.innerText = message;
  Dob.style.border = '1px solid red';
  Red4.classList.add('see4');
  Green4.classList.remove('look4');
}


function setSuccessFor4(input){
  Dob.style.border = '1px solid green';
  Red4.classList.remove('see4');
  Green4.classList.add('look4');
}


function setErrorFor5(input, message){
  var small5 = document.querySelector('#error-msg5');
  small5.innerText = message;
  Mobile.style.border = '1px solid red';
  Red5.classList.add('see5');
  Green5.classList.remove('look5');
}

function setSuccessFor5(input){
  Mobile.style.border = '1px solid green';
  Red5.classList.remove('see5');
  Green5.classList.add('look5');
}



function setErrorFor6(input, message){
  var small6 = document.querySelector('#error-msg6');
  small6.innerText = message;
  Country.style.border = '1px solid red';
  Red6.classList.add('see6');
  Green6.classList.remove('look6');
}

function setSuccessFor6(input){
  Country.style.border = '1px solid green';
  Red6.classList.remove('see6');
  Green6.classList.add('look6');
}


/*function apply()
document.querySelector('.d-fname').innerHTML = document.regForm.firstname.value;
  
  document.querySelector('.d-lname').innerHTML = document.regForm.lastname.value;
 
 document.querySelector('.d-email').innerHTML = document.regForm.email.value;
 
 document.querySelector('.dob').innerHTML = document.regForm.date.value;
 
 document.querySelector('.tel').innerHTML = document.regForm.number.value;
 
 document.querySelector('.country').innerHTML = document.regForm.country.value;
  info.classList.add('show');
  let info = document.querySelector('.modal-container3');
let registerBtn = document.querySelector('.register-btn');
let noBtn = document.querySelector('.no');
let yesBtn = document.querySelector('.yes');
let thank = document.querySelector('.modal-container4');*/
  