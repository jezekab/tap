$(function () {

  //maths to figure out how many on screen
  var w = window.innerWidth;
  var h = window.innerHeight;
  var cells_per_row = 10;
  //var cells_per_col = h / cells_per_row

  //set initial values
  var mode = 1;
  var hue = 50;
  var sat = 50;
  var bri = 50;
  var hsl;

  //generate cells to screen
  for (var i = 0; i < cells_per_row; i++) {
    $("body").append("<div>");
  }

  //determine cell size
  var cell_size = w / cells_per_row;
  var cell_size_css = cell_size + "px";
  $("div").css( "width", cell_size_css );
  $("div").css( "height", cell_size_css );

  //to browser size on resize
  $(window).resize(function () {
    alert("You will lose your changes");
  });

  //change color mode
  $( "#H" ).click(function() {
      mode = 1;
      alert(mode);
  });

  $( "#S" ).click(function() {
      mode = 2;
      alert(mode);
  });

  $( "#B" ).click(function() {
      mode = 3;
      alert(mode);
  });

  //on cell click
  $( "div" ).click(function() {
    if (mode == 1) {
      if (hue > 360 - 36) {
        hue = 0;
      } else {
        hue += 36
      }
      hue += 36;
    } else if (mode == 2) {
      if (sat > 90) {
        sat = 0;
      } else {
        sat += 10
      }
    } else if (mode == 3){
      if (bri > 90) {
        bri = 0;
      } else {
        bri += 10
      }
    }

    hsl = "hsl(" + hue + "," + sat + "% ," + bri + "%)";
    $(this).css( "background-color", hsl );
  });



  //on change of mode

});
