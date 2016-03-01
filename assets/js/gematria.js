/**
 * Gematria functions.
 *
 *    https://en.wikipedia.org/wiki/Gematria
 */

/**
 * Gematria value mappings for Latin-based alphabets (including English), based on the mappings
 * given in Chapter XX of "De Occulta Philosophia libri III" by Cornelius Agrippa (1531).
 *
 *     https://en.wikipedia.org/wiki/Three_Books_of_Occult_Philosophy
 *     https://en.wikipedia.org/wiki/Latin_alphabet
 *     https://en.wikipedia.org/wiki/English_alphabet
 *
 * The classical Latin alphabet had 23 letters, and did not contain the letters J, U or W.
 * Agrippa handles these missing letters as follows:
 *
 *     J -> I (Simple consonant), Value = 600
 *     U -> V (Simple consonant), Value = 700
 *     W -> VV (Aspirated consonant), represented by HV, Value = 900
 */

var latinHash = new Hashtable();
latinHash.put("A", 1);
latinHash.put("B", 2);
latinHash.put("C", 3);
latinHash.put("D", 4);
latinHash.put("E", 5);
latinHash.put("F", 6);
latinHash.put("G", 7);
latinHash.put("H", 8);
latinHash.put("I", 9);
latinHash.put("K", 10);
latinHash.put("L", 20);
latinHash.put("M", 30);
latinHash.put("N", 40);
latinHash.put("O", 50);
latinHash.put("P", 60);
latinHash.put("Q", 70);
latinHash.put("R", 80);
latinHash.put("S", 90);
latinHash.put("T", 100);
latinHash.put("V", 200);
latinHash.put("X", 300);
latinHash.put("Y", 400);
latinHash.put("Z", 500);
latinHash.put("J", 600);
latinHash.put("U", 700);
latinHash.put("W", 900);

/**
 * Return Gematria values for Latin-based alphabets (including English), based on the mappings
 * given in "The Serpent Tongue (Liber 187)" by Jake Stratton-Kent (2011).
 *
 *     https://en.wikipedia.org/wiki/English_Qabalah
 */

var thelemicHash = new Hashtable();
thelemicHash.put("A", 1);
thelemicHash.put("B", 20);
thelemicHash.put("C", 13);
thelemicHash.put("D", 6);
thelemicHash.put("E", 25);
thelemicHash.put("F", 18);
thelemicHash.put("G", 11);
thelemicHash.put("H", 4);
thelemicHash.put("I", 23);
thelemicHash.put("J", 16);
thelemicHash.put("K", 9);
thelemicHash.put("L", 2);
thelemicHash.put("M", 21);
thelemicHash.put("N", 14);
thelemicHash.put("O", 7);
thelemicHash.put("P", 26);
thelemicHash.put("Q", 19);
thelemicHash.put("R", 12);
thelemicHash.put("S", 5);
thelemicHash.put("T", 24);
thelemicHash.put("U", 17);
thelemicHash.put("V", 10);
thelemicHash.put("W", 3);
thelemicHash.put("X", 22);
thelemicHash.put("Y", 15);
thelemicHash.put("Z", 8);

/**
 * Calculate and return Gematria value, based on the given type (Latin|Thelemic).
 */
function getGematriaValue(input, type){ 
    'use strict';
    
    var gematriaValue = 0;
    var letterHash = latinHash;

    if (type === "Thelemic") {
        letterHash = thelemicHash;    
    }

    if (input !== undefined) {
        var letters = input.replace("[^a-zA-Z ]", "").toUpperCase().split("");

        for (var i = 0; i < letters.length; i++) {
            var letter = letters[i];
            var value = letterHash.get(letter);

            if (!(value === undefined)) {
                gematriaValue += value;                
            }
        }
    }
    else {
        gematriaValue = -1;
    }

    return gematriaValue;
}

/**
 * Calculate and return the "Digital Root" for the given input number (c.f. Isopsephy).
 *
 *     https://en.wikipedia.org/wiki/Digital_root
 *     https://en.wikipedia.org/wiki/Isopsephy
 */
function digitalRoot(n) {
    if (n < 10) {
        return n;
    }
    
    var sum = 0;
      
    while(n > 0) {
        sum += n % 10;
        // Math.floor() returns the largest integer less than or equal to a given number.
        n = Math.floor(n/10);
    }
    
    return digitalRoot(sum);
}