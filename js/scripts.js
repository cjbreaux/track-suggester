$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var answer1 = $("input:radio[name=answer]:checked").val();
    console.log(answer1);
  });
});
