"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {
    var intersections = [];

    var init = function () {
        var size = Lyngk.tableau.length;

        for (var i = 0; i < size; i++) {
            intersections.push(new Lyngk.Intersection(3));
        }
    };

    this.getIntersections = function () {
        return intersections;
    };

    this.init = function () {
        for (var i = 0; i < intersections.length; i++) {
            intersections[i].setPiece(new Lyngk.Piece(Lyngk.Color.WHITE));
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