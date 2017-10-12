"use strict";
Lyngk.Coordinates = function (c, l)
{
    var colonne = c;
    var ligne = l;
    var tableau = ['A3'
        ,'B2','B3','B4','B5'
        ,'C1','C2','C3','C4','C5','C6','C7'
        ,'D2','D3','D4','D5','D6','D7'
        ,'E2','E3','E4','E5','E6','E7','E8'
        ,'F3','F4','F5','F6','F7','F8'
        ,'G3','G4','G5','G6','G7','G8','G9'
        ,'H5','H6','H7','H8'
        ,'I7'];

    this.isValid = function()
    {
        return tableau.indexOf(colonne+ligne) >= 0;
    };
    this.toString = function()
    {
        if(this.isValid())
            return colonne+ligne;
        else
            return "invalid";
    };
    this.toclone = function()
    {
        var clone = new Lyngk.Coordinates(colonne, ligne);
        return clone;
    };
    this.calculerentier = function()
    {
        return colonne.charCodeAt(0) - 65 + ligne;
    };
};
