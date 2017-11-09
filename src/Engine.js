"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};
Lyngk.Player = {PLAYER1 : 0, PLAYER2 : 1};
Lyngk.Engine = function () {
    var intersections = [];
    var Player = [];

    Player = Lyngk.Player.PLAYER1;

    this.getPlayer = function()
    {
        return Player;
    }
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

    this.getInter = function () {
        return intersections;
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

    this.move = function (inter1, inter2) {
            if (checkmove(inter1, inter2) == true) {
                if (inter2.getPile1() > 0) {
                    var pieces = inter1.takePieces();

                    for (var i = 0; i < pieces.length; i++) {
                        inter2.setPiece(pieces[i]);
                    }
                }
                Player = (Player +1)%2;
            }
    };
    var checkmove = function(inter1, inter2)
    {
        var interc1 = inter1.getCoordinate();
        var interc2 = inter2.getCoordinate();
        var l1 = interc1.getligne();
        var l2 = interc2.getligne();
        var c1 = interc1.getcolonne();
        var c2 = interc2.getcolonne();
        var Diffc = (c1.charCodeAt(0) - (c2.charCodeAt(0)));
        var inter1Pieces = inter1.getPieces();

        for (var i = 0; i < inter1.getPile1(); i++)
        {
            var color = inter1Pieces[i].getColor();
            if (color !== Lyngk.Color.WHITE && inter2.containsColor(color))
            {
                return false;
            }
        }
        if(inter1.getPile1() < 5 && inter1.getPile1() >= inter2.getPile1()) {
            if (Diffc == 0) {
                if (Math.abs(l1 - l2) == 1)
                    return true;
                return false;
            }
            else if (Diffc == 1) {
                if (l1 - l2 == -1 || l1 - l2 == 0)
                    return true;
                return false;
            }
            else if (Diffc == -1) {
                if (l1 - l2 == 1 || l1 - l2 == 0)
                    return true;
                return false;
            }
        }


    };
    this.getIntersection = function (c) {
        for (var i = 0; i < intersections.length; i++)
        {
            if (intersections[i].getCoordinate().toString() === c)
                return intersections[i];
        }

        return null;
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

    init();
}