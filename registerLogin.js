
window.onload = (event) => {
    
  

function User(id, age, gender, password ) {
    this.id = id;
    this.age = age;
    this.gender = gender;
    this.password = password;

}

const id = document.querySelector('#id');
const age1 = document.querySelector('#age');
const gender = document.querySelector('#gender');
const password = document.querySelector('#password');
var question = document.querySelector('#question');
var randomNum = document.querySelector('.randomNum');
var regbtn = document.querySelector('#register');



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

// var newUser = new User(id.value, 23, 'male', 1234);
function register(e){
var newUser = new User(id.value, age1.value, gender.value, password.value);
    e.preventDefault();
    console.log(newUser);
    
  localStorage.setItem('user', JSON.stringify(newUser))

  form.action = "login.html"

}



}
// $(document).ready(function(){

//     var inputId = $("#inputtedId").val()
//     $('.login1').click(function(){
// alert('ready')

//     })

// })
