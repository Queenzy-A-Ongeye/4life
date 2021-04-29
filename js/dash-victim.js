// retrive data
function Booking(tosee, date, time, view){
  this.whotosee = tosee;
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
    })
  }
}


function randomNumber(length) {
  var randomNumber;
  var number = '';
  for (var count = 0; count < length; count++) {
    randomNumber = Math.floor(Math.random() * 10);
    number += randomNumber.toString();
  }
  return number;
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
    let wtosee = $("#tosee").val()
    let bookcal = $("#bkmet").val();
    let bTime = $("#appt").val();
    let hSession = $("input:radio[name=tlk]:checked").val()

    if (bookcal && bTime && hSession){
      let newbooking = new Booking(wtosee, bookcal, bTime, hSession);
      saveObjects('b-book'+def, newbooking);
    }
  });

  $('#seeSession').on('click', function(){
    for (let i = 1; i<localStorage.length; i++){
      let tosplit = localStorage.key(i).split('-');

      if (tosplit[0] == 'b'){
        let one = localStorage.key(i)
        let bookinfo = getobjects(one)
        $("ul#lstBkDply").append("<li class ='moreDetails'> Date: " + bookinfo.date +"<br>Time: "+bookinfo.time+'  Mode of Talk: '+ bookinfo.view + '<br>To see: ' + bookinfo.whotosee + "</li>");
      }
    }
  })

  $('#formreport').submit(function(event){
    event.preventDefault()
    let nameVictim = $('#nameVictim').val();
    let numberVictim = $('#numberVictim').val();
    let emailVictim = $('#emailVictim').val();
    let tdate = $('#tdate').val();
    let gbvtype = $('#gbvtype').val();
    let assualtdesc = $('#assualtdesc').val();

    if(nameVictim && numberVictim && emailVictim && tdate && gbvtype && assualtdesc){
      alert('Submitted');
      location.reload();
    }else{
      alert('Fill the blank Part')
    }
  })

  $('#feedbackform').submit(function(event){
    event.preventDefault()
    let nameVictim = $('#nameVictim').val();
    let numberVictim = $('#numberVictim').val();
    let emailVictim = $('#emailVictim').val();
    let tdate = $('#tdate').val();
    let gbvtype = $('#gbvtype').val();
    let assualtdesc = $('#assualtdesc').val();

    if(nameVictim && numberVictim && emailVictim && tdate && gbvtype && assualtdesc){
      alert('Submitted');
      location.reload();
    }else{
      alert('Fill the blank Part')
    }
  })

  $('#login').click(function(){
    window.location.href = 'login.html'
  })
  $('#home').click(function(){
    window.location.href = 'index.html'
  })
});

$(window).on('load', function(){
  for (let i = 1; i<localStorage.length; i++){
    let tosplit = localStorage.key(i).split('-');

    if (tosplit[0] == 'volunter'){
      let one = localStorage.key(i)
      let info = getobjects(one)
      
      $("ol#online").append("<li class ='moreDetails'>" + info.id + "</li>");
    }
  }

  $('#caseNumber').text(randomNumber(6))

  for (let i = 1; i<localStorage.length; i++){
    let tosplit = localStorage.key(i).split('-');

    if (tosplit[0] == 'meeting'){
      let one = localStorage.key(i)
      let meet = getobjects(one)

      $("#meetId").text(meet.link);
      $("ol#meetingList").append("<li class ='moreDetails'>" + meet.title +" <span>Join</span></li>");


    }
  }
})

