$(function () {

    // minimum cells per row/column
    // prevent resize
    // new canvas - specify cells per row
    // select multiple and click to change
    // save image from html

    var Cell = function (divID, cellSize) {

        this.hue = 50;
        this.sat = 50;
        this.bri = 100;

        this.cellSize = cellSize;

        this.divID = divID;

        this.drawCell = function () {
            //create div
            $("#canvas").append("<div class='cell' id='" + this.divID + "'></div>");

            //set style
            this.hsl = "hsl(" + this.hue + "," + this.sat + "% ," + this.bri + "%)";
            $(".cell").css("width", this.cellSize + "px")
                .css("height", this.cellSize + "px")
                .css("background-color", this.hsl);

            //clearfix

            //$("#canvas").append('<div style="clear:both"></div>');
        };

        this.updateCell = function (mode) {
            //check mode and update values
            if (mode == 1) {
                if (this.hue >= 360 - 36) {
                    this.hue = 0;
                } else {
                    this.hue += 36
                }
            } else if (mode == 2) {
                if (this.sat >= 90) {
                    this.sat = 0;
                } else {
                    this.sat += 10
                }
            } else if (mode == 3) {
                if (this.bri <= 10) {
                    this.bri = 100;
                } else {
                    this.bri -= 10
                }
            }

            //change colour of div
            this.hsl = "hsl(" + this.hue + "," + this.sat + "% ," + this.bri + "%)";
            $('#' + this.divID).css("background-color", this.hsl);

        };

        //set width&height

    };

    //set initial values
    var mode = 3;
    var cellArray = [];

    var controlsHeight = 80;

    var cellsPerRow = 15;
    var canvasWidth = $('#canvas').width();
    var canvasHeight = $(window).height() - controlsHeight;
    var cellSize = canvasWidth / cellsPerRow;
    var cellsPerCol = Math.floor(canvasHeight / cellSize);
    var leftOvers = canvasHeight % cellSize;

    //leftovers bar
    $('#leftovers').css('height', leftOvers + 'px');

    //draw grid
    for (var i = 0; i < cellsPerRow * cellsPerCol; i++) {
        cellArray[i] = new Cell(i, cellSize);
        cellArray[i].drawCell();
    }

    //update cells
    $('.cell').each(function () {
        $(this).click(function () {
            cellArray[$(this).attr('id')].updateCell(mode);
            console.log(mode);
        });
    });

    //on resize
    $(window).resize(function () {
        //alert("You will lose your changes");
    });

    //change color mode
    $("#H").click(function () {
        mode = 1;
        $('input').removeClass('selected');
        $(this).addClass('selected');
    });

    $("#S").click(function () {
        mode = 2;
        $('input').removeClass('selected');
        $(this).addClass('selected');
    });

    $("#B").click(function () {
        mode = 3;
        $('input').removeClass('selected');
        $(this).addClass('selected');
    });

    //change squares per row
    $("#minus").click(function () {
        //cells_per_row++:
    });
    //
    $("#plus").click(function () {
        //cells_per_row--:
    });

    //on cell click
    $("div").click(function () {

    });

});


