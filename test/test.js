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

    assertEquals(temp8.getState(), Lyngk.State.FULL_STACK);
};
LyngkTestCase.prototype.testInit = function()
{
    var engine = new Lyngk.Engine();
    engine.initStart();

    assertTrue(engine.checkInit());
};
LyngkTestCase.prototype.testPile1 = function()
{
    var Engine = new Lyngk.Engine();
    Engine.initStart();
    var intersections = Engine.getIntersections();

    var valid = true;
    for(var i = 0; i < 43; i++)
    {
        if (intersections[i].getPile1() !== 1)
            valid = false;
    }

    assert(valid);
;}
LyngkTestCase.prototype.testCouleur = function()
{
    var Engine = new Lyngk.Engine();
    var intersections = Engine.getInter("A3");

    intersections.setPiece(new Lyngk.Piece(Lyngk.Color.WHITE));
    intersections.setPiece(new Lyngk.Piece(Lyngk.Color.BLACK));
    intersections.setPiece(new Lyngk.Piece(Lyngk.Color.BLUE));

    assertEquals(intersections.getColor(), Lyngk.Color.BLUE);
};

LyngkTestCase.prototype.testMovePiece = function()
{
    var Engine = new Lyngk.Engine();
    Engine.initStart();

    var IntersectionA3 = Engine.getIntersection("A3");
    var IntersectionB3 = Engine.getIntersection("B3");

    var colorA3 = IntersectionA3.getColor();

    Engine.move(IntersectionA3, IntersectionB3);

    assertEquals(IntersectionB3.getColor(), colorA3);
    assertEquals(IntersectionA3.getPile1(), 0);
};
LyngkTestCase.prototype.testMovePile = function()
{
    var Engine = new Lyngk.Engine();
    Engine.initStart();

    var interA3 = Engine.getIntersection("A3");
    var interB3 = Engine.getIntersection("B3");
    var interB2 = Engine.getIntersection("B2");

    var colorA3 = interA3.getColor();

    Engine.move(interA3, interB3);
    Engine.move(interB3, interB2);

    assertEquals(interB2.getColor(), colorA3);
    assertEquals(interB3.getPile1(), 0);
};
