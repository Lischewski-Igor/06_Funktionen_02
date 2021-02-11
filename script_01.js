
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: check
*/



// Modul: Addition a+b | Test:
//ausgabe(addieren(2,3));
function addieren(a,b) {
    return a + b;
    }
// Modul: Subtrahieren a-b | Test:
//ausgabe(subtrahieren(4,3));
function subtrahieren(a,b) {
    return a - b; 
    }
// Modul: Multiplizieren a*b | Test:
//ausgabe(multiplizieren(2,3));
function multiplizieren(a,b) {
    return a * b;   
    }
// Modul: Dividieren a/b | Test:
ausgabe(dividieren(1,2));
ausgabe(dividieren(1,-2));
ausgabe(dividieren(10,0));
function dividieren(a,b) {
    if (b != 0) {
        // b ist nicht 0 / dividieren
        return a / b;
    } else {
        // b ist 0 / warnmeldung ausgeben
        return "division durch 0 nicht OK";
    }
   
    }

// Modul: Konsolenausgabe | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}
