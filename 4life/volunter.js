function Volunter(first, last, email, phone, profession, special) {
  this.first = first;
  this.last = last;
  this.email = email;
  this.phone = phone;
  this.profession = profession;
  this.special = special;
}
Volunter.prototype.fullname = function () {
  return this.first + " " + this.last
}
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
})
