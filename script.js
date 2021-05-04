var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
var colors = function(){
    var hour = $(".hour").text();
    console.log(hour);

var time = moment().format('h');
console.log(time);

$(".description").removeClass("present past future");

if (hour < time) {
    $(".description").addClass("past");
} else if (hour > time) {
    $(".description").addClass("future");
}else {
    $(".description").addClass("present");
}
};

colors();

$(".saveBtn").on("click", function(e) {
var idvalue = $(this).attr("id")
var comment = $(this).siblings(".description").val()
localStorage.setItem(idvalue, comment)
});

document.getElementById("d1").innerHTML = localStorage.getItem("s1");
document.getElementById("d2").innerHTML = localStorage.getItem("s2");
document.getElementById("d3").innerHTML = localStorage.getItem("s3");
document.getElementById("d4").innerHTML = localStorage.getItem("s4");
document.getElementById("d5").innerHTML = localStorage.getItem("s5");
document.getElementById("d6").innerHTML = localStorage.getItem("s6");
document.getElementById("d7").innerHTML = localStorage.getItem("s7");
document.getElementById("d8").innerHTML = localStorage.getItem("s8");
document.getElementById("d9").innerHTML = localStorage.getItem("s9");

