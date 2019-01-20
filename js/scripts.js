$(document).ready(function() {
  $("button#quizBtn").click(function(){
    $(".greeting").toggleClass("hidden");
    $("form").toggleClass("hidden");
    $("form").children().addClass("hidden");
    $("#question1").removeClass("hidden");
    // try to get working later (only show one question at a time)
  });


    $("button#btn1").click(function(){
      $("#question1").addClass("hidden");
      $("#question2").removeClass("hidden");
  });

    $("button#btn2").click(function() {
      $("#question2").addClass("hidden");
      $("#question3").removeClass("hidden");
  });

    $("button#btn3").click(function(){
      $("#question3").addClass("hidden");
      $("#question4").removeClass("hidden");
  });

    $("button#btn4").click(function(){
      $("#question4").addClass("hidden");
      $("#question5").removeClass("hidden");
  });


  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var answer1 = parseInt($("input:radio[name=answer1]:checked").val());
    var answer2 = parseInt($("input:radio[name=answer2]:checked").val());
    var answer3 = parseInt($("input:radio[name=answer3]:checked").val());
    var answer4 = parseInt($("input:radio[name=answer4]:checked").val());
    var answer5 = parseInt($("input:radio[name=answer5]:checked").val());

    var score = answer1 + answer2 + answer3 + answer4 + answer5

    // $(".results p, .greeting").addClass("hidden");
    $(".results").children().addClass("hidden");

    // this quiz is weighted more heavily towards an android track
    if (score){
      if (score >= 5 && score <=7) {
        $("#frontEnd").toggleClass("hidden");
        $("form").toggleClass("hidden");
      }

      if (score > 7 && score <=12) {
        $("#android").toggleClass("hidden");
        $("form").toggleClass("hidden");
      }

      if (score >= 13) {
        $("#c-sharp").toggleClass("hidden");
        $("form").toggleClass("hidden");
      }
    } else {
        alert("It looks like you didn't answer all the questions. Please answer ALL the questions before submitting.");
        location.reload();
      }
  });
});
