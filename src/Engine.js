"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};
Lyngk.Player = {PLAYER1 : 0, PLAYER2 : 1};
Lyngk.Engine = function () {
    var intersections = [];
    var Player = [];
    Player = Lyngk.Player.PLAYER1;
    var init = function() {
        var letters = "ABCDEFGHI";
        var indentation = 0;
        for (indentation; indentation < letters.length; indentation+=1) {
            loopLetter(letters[indentation]);
        }
    };

    var loopLetter = function(letter){
        var indentationLettre = 1;
        for (indentationLettre; indentationLettre < 10; indentationLettre+=1) {
            var coord = new Lyngk.Coordinates(letter, indentationLettre);
            if (coord.isValid()) {
                intersections.push(new Lyngk.Intersection(coord));
            }
        }
    };
    this.getPlayer = function() {
        return Player;
    };


    this.getInter = function () {
        return intersections;
    };

    this.checkInit = function () {
        checkLength(intersections);
        var index = 0;
        for (index; index < intersections.length; index+=1) {
            if (intersections[index].getState() !== Lyngk.State.ONE_PIECE) {
                return false;
            }
        }
        return true;

    };
    var checkLength = function(intersections){
        if (intersections.length !== Lyngk.tableau.length) {
            return false;
        }
    };

    this.move = function (inter1, inter2) {
            if (checkmove(inter1, inter2) === true) {
                if (inter2.getPile1() > 0) {
                    loopPiecesTailles(inter1,inter2);
                }
                Player = (Player +1)%2;
            }
    };
    var loopPiecesTailles = function(inter1,inter2){
        var pieces = inter1.takePieces();
        var indexPieces = 0;
        for (indexPieces; indexPieces < pieces.length; indexPieces+=1) {
            inter2.setPiece(pieces[indexPieces]);
        }
    };
    var checkGetPieces = function(inter1,inter2){
        var inter1Pieces = inter1.getPieces();
        for (var i = 0; i < inter1.getPile1(); i++) {
            var color = inter1Pieces[i].getColor();
            if (color !== Lyngk.Color.WHITE && inter2.containsColor(color)) {
                return false;
            }
            return true;
        }
    };
    var checkmove = function(inter1, inter2) {
        var interc1 = inter1.getCoordinate();
        var interc2 = inter2.getCoordinate();
        checkGetPieces(inter1,inter2);
        if(inter1.getPile1() < 5 && inter1.getPile1() >= inter2.getPile1()) {
            checkdeff(interc1,interc2);
        }
    };
    var checkdeff = function (interc1,interc2){
        var l1 = interc1.getligne();
        var l2 = interc2.getligne();
        var c1 = interc1.getcolonne();
        var c2 = interc2.getcolonne();
        var Diffc = (c1.charCodeAt(0) - (c2.charCodeAt(0)));
        if (Diffc === 0) {
            return (Math.abs(l1 - l2) === 1);
        }
        else if (Diffc === 1) {
            return (l1 - l2 === -1 || l1 - l2 === 0);
        }
        else if (Diffc === -1) {
            return (l1 - l2 === 1 || l1 - l2 === 0);
        }
    };
    this.getIntersection = function (c) {
        for (var i = 0; i < intersections.length; i++) {
            if (intersections[i].getCoordinate().toString() === c) {
                return intersections[i];
            }
        }

        return null;
    };
    this.initStart = function(){

        for (var i = 0; i < 43; i++) {
            var countColors1 = [8,8,8,8,8,3];
            for (var i = 0; i < 43; i++) {

                var randomColor;
                do{
                    randomColor = Math.floor(Math.random() * 6);
                }while(countColors1[randomColor] <= 0);
                countColors1[randomColor]--;

                intersections[i].setPiece(new Lyngk.Piece(randomColor));
            }
        }
    };

    init();
};