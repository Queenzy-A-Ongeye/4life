$(document).ready(function(){
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
             

         }
         return true
        }
    
                     
     
})

$(document).ready(function(){

    $('.loginVolunteer').hide()

// var option = $("#choose").val('volunteer')

// if (option=='volunteer'){
// alert('ready')
// }
    
$('#choose').change(function(){
    $('.loginVolunteer').show()

    $('.loginVictim').slideUp('slow')
    
})

$('.volunteerbtn').click(function(e){
    e.preventDefault();

        const volunteerId = document.querySelector('#volunteerId').value
    const volunteerPassword = document.querySelector('#volunteerPassword').value

        var givenId='life'
        var givenPassword=givenId;
    if(volunteerId===""|| volunteerPassword===""){
        alert('please fill all the fields')
        return false;
    }
    else if(givenId===volunteerId&&givenPassword===volunteerPassword){
        alert('volunteer login successful')
    }
})
})