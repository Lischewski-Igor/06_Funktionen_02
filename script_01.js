
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: check
3. Fkt. Grundrechenarten :: check
4. Ausgabe in Konsole :: check
*/

// Modul: Gesamtfunktionalität | Test:
start()
function start() {
    ausgabe(rechner(getOp(), getZahl("1"), getZahl("2")));
}

// Modul: Operand eingeben | Test:
// ausgabe(getOp());
function getOp() {
    let op = prompt("Bitte +|-|*|/ eingeben.");
    while (!checkOp(op)) {
        op = prompt("Bitte einen korrekten Operator eingeben.")
    }
    return op;
}

function checkOp(checkStr) {
    // ODER (OR) - Verknüpfungen
    return  (checkStr == "+") ||
            (checkStr == "-") ||
            (checkStr == "*") ||
            (checkStr == "/");
}

// Modul: Zahl 1 eingabe | Test:
//ausgabe(getZahl("1"));
//ausgabe(getZahl("2"));
function getZahl(numStr) {
    let zahl = parseInt(prompt("Bitte Zahl " + numStr + " eingeben."));
    while (isNaN(zahl)) {
        zahl = parseInt(prompt("Das ist keine Zahl. Bitte nochmal:"));
    }
    return zahl;
}

// Modul: Auswahl Rechenart | Test:

// ausgabe(rechner("+", 10, 4));
// ausgabe(rechner("-", 10, 4));
// ausgabe(rechner("*", 10, 4));
// ausgabe(rechner("/", 10, 4));
// ausgabe(rechner("/", 10, 0));
// ausgabe(rechner("gf", 10, 4));

function rechner(op, a, b) {

    switch (op) {
        case "+":
            return addieren(a,b);
        case "-":
            return subtrahieren(a,b);
        case "*":
            return multiplizieren(a,b);
        case "/":
            return dividieren(a,b);

        default:
            return "Irgendwas ging schief!";
    }
}

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
    // ausgabe(dividieren(1,2));
function dividieren(a,b) {
    if (b == 0) {return "Division durch 0 nicht OK";}
    return a/b;

    /*
    if (b != 0) {
        // b ist nicht 0 / dividieren
        return a / b;
    } else {
        // b ist 0 / warnmeldung ausgeben
        return "division durch 0 nicht OK";
    }
   */
    }

// Modul: Konsolenausgabe | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}
