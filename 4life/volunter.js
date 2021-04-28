$(document).ready(function(){
    $("#chat").click(function(){
        document.getElementById("mySideChat").style.width = "450px";
    })
    $("#closeChat").click(function(){
      document.getElementById("mySideChat").style.width = "0px";
    })
    function volunter(fullName ,email ,professional, specialisation) {

      this.fullName = fullName;
      this.email = email;
      this.professional = professional;
      this.specialisation = specialisation;
      $(document).ready(function(){
        $("#contact").submit(function(event){
            event.preventDefault();
            var userFullName = $("#").val();
            var userEmail = $("input#lastName").val();
            var userProfessional = $("input#email").val();
            var userSpecialisation = parseInt($("input#phone").val());
    
    })
  
    
})