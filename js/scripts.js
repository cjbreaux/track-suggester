$(document).ready(function() {
  $("button#quizBtn").click(function(){
    $(".greeting").toggleClass("hidden");
    $("form").toggleClass("hidden");
    // $("form").children().addClass("hidden");
    // $("#question1").removeClass("hidden");
    // try to get working later (only show one question at a time)
  });

  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var answer1 = parseInt($("input:radio[name=answer1]:checked").val());
    console.log(answer1);

    var answer2 = parseInt($("input:radio[name=answer2]:checked").val());
    console.log(answer2);

    var answer3 = parseInt($("input:radio[name=answer3]:checked").val());
    console.log(answer3);

    var answer4 = parseInt($("input:radio[name=answer4]:checked").val());
    console.log(answer4);

    var answer5 = parseInt($("input:radio[name=answer5]:checked").val());
    console.log(answer5);

    var score = answer1 + answer2 + answer3 + answer4 + answer5

    $(".results p, .greeting").addClass("hidden");

    // this quiz is weighted more heavily towrds an android track
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
        alert("Please answer all questions before submitting.");
      }
  });
});
