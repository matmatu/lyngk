"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {
    var intersections = [];

    var init = function(){
        var letters = "ABCDEFGHI";

        for (var i = 0; i < letters.length; i++)
        {
            for (var j = 1; j < 10; j++)
            {
                var coord = new Lyngk.Coordinates(letters[i], j);

                if (coord.isValid())
                    intersections.push(new Lyngk.Intersection(coord));
            }
        }
    };

    this.getIntersections = function () {
        return intersections;
    };
    this.initStart = function(){

        for (var i = 0; i < 43; i++)
        {
            var countColors1 = [8,8,8,8,8,3];
            for (var i = 0; i < 43; i++) {

                var randomColor;
                do{
                    randomColor = Math.floor(Math.random() * 6);
                }while(countColors1[randomColor] <= 0)
                countColors1[randomColor]--;

                intersections[i].setPiece(new Lyngk.Piece(randomColor));
            }
        }
    };

    this.checkInit = function () {
        if (intersections.length != Lyngk.tableau.length)
            return false;

        for (var i = 0; i < intersections.length; i++) {
            if (intersections[i].getState() !== Lyngk.State.ONE_PIECE)
                return false;
        }

        return true;

    };
    this.getIntersection = function (c) {
        for (var i = 0; i < intersections.length; i++)
        {
            if (intersections[i].getCoordinate().toString() === c)
                return intersections[i];
        }

        return null;
    };
    this.move = function (intersection1, intersection2) {
            var pieces = intersection1.takePieces();

            for (var i = 0; i < pieces.length; i++) {
                intersection2.setPiece(pieces[i]);
            }
    };
    this.getInter = function (c) {
        for (var i = 0; i < intersections.length; i++)
        {
            if (intersections[i].getCoordinate().toString() === c)
                return intersections[i];
        }

        return null;
    };
    init();
}