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
    var temp = new Lyngk.coordinates('A',3);
    assertEquals(temp.toString() , 'A3');
}
LyngkTestCase.prototype.tostringf = function()
{
    var temp1 = new Lyngk.coordinates('A',1);
    assertEquals(temp1.toString() , 'A1');
}
