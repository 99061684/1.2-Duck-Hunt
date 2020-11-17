# Duck Hunt game.
de opdracht is gemaakt door: Bas Verdoorn

ik heb de opdracht gemaakt met alle onderstaande eisen en een paar leuke extra dingen, zoals bijv. infinite mode uit stopt het spel na 20 keer schieten.

## extra's
* infinite mode: met infinite mode aan duurt het spel oneindig. met infinite mode uit stopt het spel na 20 keer schieten.
* dynamisch: de game is dynamisch: als je de groote van een de personage veranderd dan blijft het spel werken. check in de code voor de (speels) var deze kan je veranderen om het spel moeilijker of juist makkelijker te maken.
* extra css: ik heb het uiterlijk wat mooier gemaakt met css.

## DE OPDRACHT:
Zo’n 30 jaar geleden werd de Nintendo NES uitgegeven. Naast Mario kon je het spel Duck Hunt spelen met een Zapper (soort pistool), waarbij je op het scherm moest richten en eenden neerknallen. Een demo van het spel kun je zien in het volgende filmpje: https://youtu.be/x-daxzVxrQI 
 
In deze opdracht gaan we een afgeleide van dit spel maken. Bijgaand vind je een geanimeerde GIF van een duck en een achtergrondafbeelding van het speelveld.

### STAP 1 "Flying Duck”

Maak een webpagina met de afbeelding van de stage (uit de bijlage) en een afbeelfing van de duck er overheen. Positioneer de duck zo dat deze in het midden van het speelveld staat als startpositie.

Maak een JavaScript functie fly(); met als parameter de string ’direction’.
Deze parameter staat voor de richting die je meegeeft bij de functie aanroep en kan zijn: N, NE, E, SE, S, SW, W of NW. Met een ’switch’ (https://www.w3schools.com/js/js_switch.asp) of 'if statements' laat je de duck op het scherm ’vliegen’ d.m.v het aanpassen van de positie. De vliegafstand is altijd 75px. Dus als je naar locatie ’NE’ vliegt, ga je 75px naar rechts en 75px omhoog. Als je naar ’W’ vliegt ga je 75px naar links.

### STAP 2 "Moving Duck”

Maak een globale array maken met alle richtingen (N, NE, E, SE, S, SW, W, NW) en zorg er voor dat je een functie (bijv moveDuck() ) hebt die de functie fly() iedere 0,5 seconden (https://www.w3schools.com/js/js_timing.asp) uitvoert met een random richting uit de array.

### STAP 3 "Score”

Maak twee score tellers, HIT & MISS. Als je op de afbeelding van de duck klikt moet de HIT teller met 1 verhoogt worden als je op de achtergrond afbeelding klikt moet de MISS teller met 1 verhoogt worden. In beide gevallen voer je ook de het bewegen van de duck uit opnieuw uit. Wanneer het totaal van HIT & MISS 20 is, is het spel afgelopen en krijg je je score te zien.


