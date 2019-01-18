$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var answer1 = parseInt($("input:radio[name=answer1]:checked").val());
    console.log(answer1);

    if (answer1 >= 1) {
      alert(answer1);
      $(".results").show();
    }

  });
});
