$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var answer1 = parseInt($("input:radio[name=answer1]:checked").val());
    console.log(answer1);

    var answer2 = parseInt($("input:radio[name=answer2]:checked").val());
    console.log(answer2);

    var answer3 = parseInt($("input:radio[name=answer3]:checked").val());
    console.log(answer2);

    var answer4 = parseInt($("input:radio[name=answer4]:checked").val());
    console.log(answer2);

    var answer5 = parseInt($("input:radio[name=answer5]:checked").val());
    console.log(answer2);

    var score = answer1 + answer2 + answer3 + answer4 + answer5

    $(".results p, .greeting").addClass("hidden");

    if (score >= 5 && score <=7) {
      alert("Your score is: " + score + "." + "Try track: Front End!");
      $("#ruby").removeClass("hidden");
    }

    if (score > 7 && score <=12) {
      alert("Your score is: " + score + "." + "Try track: General!");
      $("#PHP").removeClass("hidden");
    }

    if (score >= 13) {
      alert("Your score is: " + score + "." + "Try track: Back End!");
      $("#Java").removeClass("hidden");
    }



  });
});
