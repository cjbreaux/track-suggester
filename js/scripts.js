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

    if (score >= 2 && score <=3) {
      alert("Your score is: " + score + "." + "Try track 1!");
      $("#ruby").removeClass("hidden");
    }

    if (score > 3 && score <=4) {
      alert("Your score is: " + score + "." + "Try track 2!");
      $("#PHP").removeClass("hidden");
    }

    if (score >= 5) {
      alert("Your score is: " + score + "." + "Try track 3!");
      $("#Java").removeClass("hidden");
    }



  });
});
