$(document).ready(function(){
  $("#chat").click(function(){
      document.getElementById("mySideChat").style.width = "450px";
  })
  $("#closeChat").click(function(){
    document.getElementById("mySideChat").style.width = "0px";
  })
  // book session
  $('#confr').on('click', function(){
    let bookcal = $("")
    let bTime = $("#appt").val();
    let hSession = $("input:radio[name=tlk]:checked").val()

    
  });
})
