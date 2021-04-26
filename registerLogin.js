function User(id, age, gender, password, ) {
    this.id = id;
    this.age = age;
    this.gender = gender;
    this.password = password;


}

var id = document.querySelector('#id')
var age = document.querySelector('#age')
var gender = document.querySelector('#gender')
var password = document.querySelector('#password')
var question = document.querySelector('#question')
var randomNum = document.querySelector('.randomNum')
var regbtn = document.querySelector('#register');
var lgnbtn = document.querySelector('#login');
var inputtedId = document.querySelector('#inputtedId')
var inputtedPassword = document.querySelector('#inputtedPassword')


regbtn.addEventListener('submit', register);


// randomNum.addEventListener('click', randomNumber)
function randomNumber(length) {
    var randomNumber;
    var number = '';

    for(var count = 0; count < length; count++) {
        randomNumber = Math.floor(Math.random() * 10);
        number += randomNumber.toString();
    }
    return number;
}

id.value = randomNumber(5);

var newUser = new User(id.value, age.value, gender.value, password.value);
function register(e){
    e.preventDefault();
    
   localStorage.setItem('user', JSON.stringify(newUser))
   var stored = JSON.stringify(newUser)
  console.log(stored)
    
}


// lgnbtn.addEventListener('submit', login)

function login(){
    
   var id2 =  localStorage.getItem('user', JSON.parse(newUser.id))

   if(id2===inputtedId){
       alert("login success")
   }
   else{
       alert('check credentials')
       return
   }
}


