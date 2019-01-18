$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var answer1 = parseInt($("input:radio[name=answer1]:checked").val());
    console.log(answer1);

    var answer2 = parseInt($("input:radio[name=answer2]:checked").val());
    console.log(answer2);

    var score = answer1 + answer2

    if (score >= 2 && score <=3) {
      alert("Your score is: " + score + "." + "Try track 1!");
      // $(".results").show();
    }

    if (score > 3 && score <=4) {
      alert("Your score is: " + score + "." + "Try track 2!");
    }

    if (score >= 5) {
      alert("Your score is: " + score + "." + "Try track 3!");
    }



  });
});
