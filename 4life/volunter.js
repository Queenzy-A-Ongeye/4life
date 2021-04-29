function Volunter(first, last, email, phone, profession, special) {
  this.first = first;
  this.last = last;
  this.email = email;
  this.phone = phone;
  this.profession = profession;
  this.special = special;
}


function meetroom(link, title, desc, td){
  this.link = link;
  this.title = title;
  this.desc = desc;
  this.td = td;
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

let meetID = randomNumber(7)

let getobjects = function (userkey) {
  return JSON.parse(localStorage.getItem(userkey))
}
let saveObjects = function (userkey, uservalue) {
  let str = JSON.stringify(uservalue);
  return localStorage.setItem(userkey, str)
}
let vdef = 0
window.onload = function () {
  if (localStorage.length === 0) {
    saveObjects('Vdefault', vdef);
    location.reload();
  } else {
    vdef = localStorage.length
    $("#confr").on('click', function () {
      vdef += 1
      saveObjects('default', vdef)
    })
  }
  $("#meetinId").text(meetID);



  for (let i = 1; i<localStorage.length; i++){
    let tosplit = localStorage.key(i).split('-');
    console.log(tosplit)

    if (tosplit[0] == 'volunter'){
      let one = localStorage.key(i)
      let userdet = getobjects(one)

      $("#firstname").text(userdet.first +' '+ userdet.last);
      $("#mail").text(userdet.email);
      $("#prof").text(userdet.profession);
      $("#spec").text(userdet.special);
    }
  }  
}
$(document).ready(function () {
  $("#chat").click(function () {
    document.getElementById("mySideChat").style.width = "450px";
  })
  $("#closeChat").click(function () {
    document.getElementById("mySideChat").style.width = "0px";
  })
  $("#contact").on('click',function(){
    var volFirstName = $("#firstName").val();
    var volSecondName = $("input#lastName").val();
    var volEmail = $("input#email").val();
    var volNumber = parseInt($("input#phone").val());
    var volProf = $("#prof").val();
    var volSpecial = $("#special").val();
    if (volFirstName && volSecondName && volEmail && volNumber && volProf && volSpecial){
      var newVolunter = new Volunter(volFirstName, volSecondName, volEmail, volNumber, volProf, volSpecial)
      saveObjects('volunter-' + vdef, newVolunter);
    }
  })

  $('#crtmeet').on('click', function(){
    var title = $("#title").val();
    var description = $("#description").val();
    var timede = $("#timede").val();
    var meetin = new meetroom(meetID, title, description, timede)
    if (title && description && timede && meetinId){
      var meetin = new meetroom(meetID, title, description, timede)
      saveObjects('meeting-' + vdef, meetin);
      location.reload();
    }

    for (let i = 1; i<localStorage.length; i++){
      let tosplit = localStorage.key(i).split('-');

      if (tosplit[0] == 'meeting'){
        let one = localStorage.key(i)
        let meet = getobjects(one)
        $("ol#lstmeet").append("<li class ='moreDetails'> Meeting Link: " + meet.link +"<br>Meeting Title: "+meet.title+'<br>Meeting Description: '+ meet.desc + '<br>Meeting Time: ' + meet.td + "</li><br>");
      }
    }

    $(".moreDetails").last().click(function(){
      for (let i = 1; i<localStorage.length; i++){
        let tosplit = localStorage.key(i).split('-');
  
        if (tosplit[0] == 'meeting'){
          let one = localStorage.key(i)
          let meet = getobjects(one)
          let finan = confirm('Do want to Start Meeting? ')
        }
      }
    })
  })



  $('#feedbackform').submit(function(event){
    event.preventDefault()
    let idnumb = $('#idnumb').val();
    let career = $('#career').val();
    let country = $('#country').val();
    let subject = $('#subject').val();

    if(idnumb && career && country && subject ){
      alert('Submitted');
      location.reload();
    }else{
      alert('Fill the blank Part')
    }
  })
})
