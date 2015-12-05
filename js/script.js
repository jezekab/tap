$(function () {
  //maths to figure out how many on screen
  var w = window.innerWidth;
  var h = window.innerHeight;

  //set initial values
  var mode = 1;
  var hue = 50;
  var sat = 50;
  var bri = 50;
  var hsl;

  //generate cells to screen
  for (var i = 0; i < 10; i++) {
    $("body").append("<div>");
  }

  //determine cell size
  var cell_size = w / 10;
  var cell_size_css = cell_size + "px";
  $("div").css( "width", cell_size_css );
  $("div").css( "height", cell_size_css );

  //on cell click
  $( "div" ).click(function() {
    if (mode == 1) {
      hue += 60;
    } else if (mode == 2) {
      sat += 60;
    } else {
      bri += 60
    }

    hsl = "hsl(" + hue + "," + sat + "% ," + bri + "%)";
    $(this).css( "background-color", hsl );
  });

  //on change of mode

});
