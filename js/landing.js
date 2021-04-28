//what we do

$(document).ready(function(){
    $("#repo-img").click(function(){
        $("#repo-img").toggle("slow").hide(1000)
        $("#report").fadeIn("slow")
    });
    $("#report").click(function(){
        $("#report").toggle("slow").hide(1000)
        $("#repo-img").fadeIn("slow")
    });

    $("#dev-img").click(function(){
        $("#dev-img").toggle("slow").hide(1000)
        $("#dev").fadeIn("slow")
    });
    $("#dev").click(function(){
        $("#dev").toggle("slow").hide(1000)
        $("#dev-img").fadeIn("slow")
    });

    $("#edu-img").click(function(){
        $("#edu-img").toggle("slow").hide(1000)
        $("#educate").fadeIn("slow")
    });
    $("#educate").click(function(){
        $("#educate").toggle("slow").hide(1000)
        $("#edu-img").fadeIn("slow")
    })
});