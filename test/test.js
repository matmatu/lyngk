'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");
LyngkTestCase.prototype.testCoordinate = function()
{
    var coordone = new Lyngk.Coordinates('A',1);
    assertFalse(coordone.isValid());


};
LyngkTestCase.prototype.test43 = function()
{
    var compteur = 0;
    var lettre = ("ABCDEFGHI");

    for(var i = 0; i < lettre.length;i++)
    {
        for(var j = 1; j <= 9 ; j++){
            var tempo = new Lyngk.Coordinates(lettre[i],j);
            if(tempo.isValid()){
                compteur++;
            }
        }
    }
    assertEquals(compteur,43);

};

LyngkTestCase.prototype.tostring = function()
{
    var temp = new Lyngk.Coordinates('A',3);
    assertEquals(temp.toString() , 'A3');
};
LyngkTestCase.prototype.tostringf = function()
{
    var temp1 = new Lyngk.Coordinates('A',1);
    assertEquals(temp1.toString() , 'A1');
};
LyngkTestCase.prototype.testclone = function()
{
    var temp2 = new Lyngk.Coordinates('A',3);
    var temp3 = temp2.toclone();
    assertEquals(temp2.toString() , temp3.toString());
};
LyngkTestCase.prototype.testhash = function()
{
    var temp4 = new Lyngk.Coordinates('A',3);
    assertEquals(temp4.calculerentier() , 3);
};
LyngkTestCase.prototype.testIntersection = function()
{
    var temp5 = new Lyngk.Intersection(3);

    assertEquals(temp5.getState(), Lyngk.State.VACANT);
};
LyngkTestCase.prototype.testIntersectionBleu = function()
{
    var temp6 = new Lyngk.Intersection(3);
    temp6.setPiece(new Lyngk.Piece(Lyngk.Color.BLUE));

    assertEquals(temp6.getState(), Lyngk.State.ONE_PIECE);
    assertEquals(temp6.getColor(), Lyngk.Color.BLUE);
};
LyngkTestCase.prototype.testIntersectionBleuRouge = function()
{
    var temp7 = new Lyngk.Intersection(3);
    temp7.setPiece(new Lyngk.Piece(Lyngk.Color.BLUE));
    temp7.setPiece(new Lyngk.Piece(Lyngk.Color.RED));

    assertEquals(temp7.getState(), Lyngk.State.STACK);
    assertEquals(temp7.getColor(), Lyngk.Color.RED);
};
LyngkTestCase.prototype.test5PiecesIntersection = function()
{
    var temp8 = new Lyngk.Intersection(3);
    temp8.setPiece(new Lyngk.Piece(Lyngk.Color.BLUE));
    temp8.setPiece(new Lyngk.Piece(Lyngk.Color.RED));
    temp8.setPiece(new Lyngk.Piece(Lyngk.Color.RED));
    temp8.setPiece(new Lyngk.Piece(Lyngk.Color.RED));
    temp8.setPiece(new Lyngk.Piece(Lyngk.Color.BLACK));

    assertEquals(testInter.getState(), Lyngk.State.FULL_STACK);
};