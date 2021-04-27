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
    
        $('.loginVolunteer').hide()
            var volunteer = $("#choose  option:selected").val()
        if(volunteer==='volunteer'){
            // $('.loginVictim').slideUp();
            alert('volunteer')
                        
        }
})