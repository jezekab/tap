$(function () {

    var Cell = function (divID) {

        this.hue = 50;
        this.sat = 50;
        this.bri = 50;

        this.cellWidth = 200;
        this.cellHeight = 200;

        this.divID = divID;

        this.drawCell = function () {
            //create div
            $("#canvas").append("<div class='cell' id='" + this.divID + "'></div>");

            //set style
            this.hsl = "hsl(" + this.hue + "," + this.sat + "% ," + this.bri + "%)";
            $(".cell").css("width", this.cellWidth + "px")
                .css("height", this.cellHeight + "px")
                .css("background-color", this.hsl);
        };

        this.updateCell = function (mode) {
            //check mode and update values
            if (mode == 1) {
                if (this.hue > 360 - 36) {
                    this.hue = 0;
                } else {
                    this.hue += 36
                }
            } else if (mode == 2) {
                if (this.sat > 90) {
                    this.sat = 0;
                } else {
                    this.sat += 10
                }
            } else if (mode == 3) {
                if (this.bri > 90) {
                    this.bri = 0;
                } else {
                    this.bri += 10
                }
            }

            //change colour of div
            this.hsl = "hsl(" + this.hue + "," + this.sat + "% ," + this.bri + "%)";
            $('#' + this.divID).css("background-color", this.hsl);

        };

        //set width&height

    };

    //set initial values
    var mode = 1;
    //var screenWidth = $('body').width;
    var cellArray = [];

    var cellsPerRow = 10;
    //var cellSize = screenwidth / cellsPerRow;

    //draw grid
    for (var i = 0; i < cellsPerRow; i++) {
        cellArray[i] = new Cell(i);
        cellArray[i].drawCell();
    }

    //update cells
    $('.cell').each(function () {
        $(this).click(function () {
            cellArray[$(this).attr('id')].updateCell(mode);
            console.log(mode);
        });
    });

    ////determine cell size
    //var cell_size = w / cells_per_row;

    //maths to figure out how many on screen
    //var w = window.innerWidth;
    //var h = window.innerHeight;
    //var cells_per_col = h / cells_per_row


    //on resize
    $(window).resize(function () {
        //alert("You will lose your changes");
    });

    //change color mode
    $("#H").click(function () {
        mode = 1;
        console.log(mode);
    });

    $("#S").click(function () {
        mode = 2;
        console.log(mode);
    });

    $("#B").click(function () {
        mode = 3;
        console.log(mode);
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


