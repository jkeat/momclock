$(function() {
    var clock = $('.minclock').FlipClock({
        "autoStart": false
    });

    $("#start").on("click", function() {
      clock.start();
      $("#start").prop("disabled", true);
      $("#stop").prop("disabled", false);
      $("#reset").prop("disabled", false);
    });
    $("#stop").on("click", function() {
      clock.stop();
      $("#start").prop("disabled", false);
      $("#stop").prop("disabled", true);
      $("#reset").prop("disabled", false);
    });
    $("#reset").on("click", function() {
      clock.setTime(0);
      clock.stop();
      $("#start").prop("disabled", false);
      $("#stop").prop("disabled", true);
      $("#reset").prop("disabled", true);
    });
});
