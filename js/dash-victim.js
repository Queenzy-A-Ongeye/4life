// retrive data
function Booking(date, time, view){
  this.date = date;
  this.time = time;
  this.view = view;
}


let getobjects = function(userkey){
  return JSON.parse(localStorage.getItem(userkey))
}

let saveObjects = function(userkey,uservalue){
  let str = JSON.stringify(uservalue);
  return localStorage.setItem(userkey, str)
}

let def = 0
window.onload = function(){
  if (localStorage.length === 0){
    saveObjects('default', def);
    location.reload();
  }else{
    def = localStorage.length
    $("#confr").on('click', function(){
      def += 1
      saveObjects('default', def)
      console.log('saved')
    })
  }
}

// user logic
$(document).ready(function(){
  $("#chat").click(function(){
      document.getElementById("mySideChat").style.width = "450px";
  })
  $("#closeChat").click(function(){
    document.getElementById("mySideChat").style.width = "0px";
  })

  // book session
  $('#confr').on('click', function(){
    let bookcal = $("#bkmet").val();
    let bTime = $("#appt").val();
    let hSession = $("input:radio[name=tlk]:checked").val()

    if (bookcal && bTime && hSession){
      let newbooking = new Booking(bookcal, bTime, hSession);
      saveObjects('user'+def, newbooking);
    }

    for (let i = 1; i<localStorage.length; i++){
      let bookinfo = getobjects('user'+i)
      $("ul#lstBkDply").append("<li class ='moreDetails'>" + bookinfo.date +"--"+bookinfo.time+'--'+ bookinfo.view + "</li>");
    }
  });
});
