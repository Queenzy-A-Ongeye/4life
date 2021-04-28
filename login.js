$(document).ready(function(){

    $("#question").hide()
    $("#volunteerQuestion").hide()
    var lgnbtn = document.querySelector('#login');
    lgnbtn.addEventListener('submit', login)
    
    function login(e){
         e.preventDefault()

        const inputtedId = document.querySelector('#inputtedId')
        const inputtedPassword = document.querySelector('#inputtedPassword')
        
        var newInput = inputtedId.value;
        var newPass = inputtedPassword.value;
          var retrieved = JSON.parse((localStorage.getItem('user')))
             
            if(newInput==="" || newPass===""){
                alert('Fields cannot be empty')
                return false
            }
            
            else if(newInput != retrieved.id || newPass !=retrieved.password){
                alert('wrong user ID or password')
            return false;
            }
            
         else if(newInput===retrieved.id&& newPass===retrieved.password){
            
             alert('login success')
             window.location.href = 'dash-victim.html'

             

         }
        
        }
   })

$(document).ready(function(){

    $('.loginVolunteer').hide()

    

$('.volunteerdash').click(function(){
    $('.loginVolunteer').show()
    $('.loginVictim').slideUp('slow');

    
})
$('.victimdash').click(function(){
    // $('.loginVolunteer').slideUp('slow')
    $('.loginVictim').fadeIn('slow')
    $('.loginVolunteer').hide();
})


// var volunteerbtn = document.querySelector('.volunteerbtn');
// volunteerbtn.addEventListener('submit', volunteerlogin)
// function volunteerlogin(){
$('#loginVolunteer').submit(function(e){

    e.preventDefault();

        const volunteerId = document.querySelector('#volunteerId').value
    const volunteerPassword = document.querySelector('#volunteerPassword').value

        var givenId='life'
        var givenPassword=givenId;
    if(volunteerId===""|| volunteerPassword===""){
        alert('please fill all the fields')
        return false;
    }
    
    else if(givenId!=volunteerId||givenPassword!=volunteerId){
        alert('User ID or password is incorrect')
    }

    else if(givenId===volunteerId&&givenPassword===volunteerPassword){
            window.location.href = './4life/volunter.html'

    }


})
})