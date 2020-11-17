//(speels) betekent dat je met de variabelen kan spelen en dat je daarmee bijv. het spel moeilijker kan maken door de snelheid van het personage te veranderen.

//vaste begin instellingen
var game = false;

var stage = document.getElementById('stage');
var personage = document.getElementById("personage");
var button_start = document.getElementById("button_start");

var background_w = parseInt(window.getComputedStyle(stage).width.replace('px',''));
var background_h = parseInt(window.getComputedStyle(stage).height.replace('px',''));

var personage_w = parseInt(window.getComputedStyle(personage).width.replace('px',''));
var personage_h = parseInt(window.getComputedStyle(personage).height.replace('px',''));

var x = 0;
var y = 0;
var hits = 0;
var mis = 0;

var direction_array = ["N", "NE", "E", "SE", "S", "SW","W", "NW"];

personage.onclick = function() {score(true, event)};
stage.onclick = function() {score(false)};

button_start.onclick = function() {start()};

var pos_x = 0;
var pos_y = 0;

//game instellingen (speels)
var stap_timer = 0.5; //aantal seconden tussen elke stap
var vliegafstand = 75; //hoeveelheid px hij per stap verplaatst.
var score_weergave = 5; //elke keer als er "score_weergave" keer geschoten is word de score op het scherm weergeven. 

function start() {
    if (game == false) {
        pos_x = (background_w /2) - (personage_w / 2);
        pos_y = (background_h /2) - (personage_h / 2);
    
        personage.style.top = pos_y + 'px'; 
        personage.style.left = pos_x + 'px';
        personage.style.cursor = 'pointer';
    
        game = true;
    
        // alert("buiten het scherm 1 " + (pos_x + (personage_w /2)) + " "+ (background_w / 2));
        // alert("buiten het scherm 1 " + ((pos_x + (personage_w /2)) < (background_w / 2)));
        // alert("buiten het scherm 1 " + ((pos_x + (personage_w /2)) > (background_w / 2)));
        // alert("buiten het scherm 1 " + ((pos_x + (personage_w /2)) == (background_w / 2)));
    
        moveDuck(); 
    }
}

function fly(direction) {
    x = 0;
    y = 0;

    switch (direction) {
        case "N":
            pos_y = pos_y - 75;
            personage.style.top = pos_y + 'px'; 
            personage.style.left = pos_x + 'px';   
            break;
        case "NE":
            pos_y = pos_y - 75;
            pos_x = pos_x + 75;
            personage.style.top = pos_y + 'px'; 
            personage.style.left = pos_x + 'px';
            
            break;
        case "E":
            pos_x = pos_x + 75;
            personage.style.top = pos_y + 'px'; 
            personage.style.left = pos_x + 'px';
                
            break;
        case "SE":
            pos_y = pos_y + 75;
            pos_x = pos_x + 75;
            personage.style.top = pos_y + 'px'; 
            personage.style.left = pos_x + 'px';
            
            break;
        case "S":
            pos_y = pos_y + 75;
            personage.style.top = pos_y + 'px'; 
            personage.style.left = pos_x + 'px';
            
            break;
        case "SW":
            pos_y = pos_y + 75;
            pos_x = pos_x - 75;
            personage.style.top = pos_y + 'px'; 
            personage.style.left = pos_x + 'px';
            
            break;
        case "W":
            pos_x = pos_x - 75;
            personage.style.top = pos_y + 'px'; 
            personage.style.left = pos_x + 'px';
            
            break;
        case "NW":
            pos_y = pos_y - 75;
            pos_x = pos_x - 75;
            personage.style.top = pos_y + 'px'; 
            personage.style.left = pos_x + 'px';
          
        break;
        default:
        alert("2" + direction);
    }

    if ((pos_x + (personage_w /2)) < 0) {
        // alert("buiten het scherm < " + ((pos_x + (personage_w /2)) < 0) + ", " + (pos_x + (personage_w /2)) + ", " + (background_w / 2));
        pos_x = pos_x + 75;
        personage.style.top = pos_y + 'px'; 
        personage.style.left = pos_x + 'px'; 
    } 

    if ((pos_x + (personage_w /2)) > 1280) {
        // alert("buiten het scherm > " + ((pos_x + (personage_w /2)) > 0)+ ", " + (pos_x + (personage_w /2)) + ", " + (background_w / 2));
        pos_x = pos_x - 75;
        personage.style.top = pos_y + 'px'; 
        personage.style.left = pos_x + 'px';
    }

    if ((pos_y + (personage_w /2)) < 0) {
        // alert("buiten het scherm < " + ((pos_y + (personage_w /2)) < 0) + ", " + (pos_y + (personage_w /2)) + ", " + (background_h / 2));
        pos_y = pos_y + 75;
        personage.style.top = pos_y + 'px'; 
        personage.style.left = pos_x + 'px';
    } 

    if ((pos_y + (personage_w /2)) > 769) {
        // alert("buiten het scherm > " + ((pos_y + (personage_w /2)) > 0)+ ", " + (pos_y + (personage_w /2)) + ", " + (background_h / 2));
        pos_y = pos_y - 75;
        personage.style.top = pos_y + 'px'; 
        personage.style.left = pos_x + 'px';
    }
}

function moveDuck() {
    if (game === true) {
        var a = Math.floor((Math.random() * direction_array.length));
        var b = direction_array[a]
        fly(b);

        setTimeout(moveDuck, (stap_timer * 1000));
    } 
}

function score(click_personage, event) {
    if (game == true) {
        if (click_personage === true) {
            hits++;
            event.stopPropagation();
        } else if (click_personage != true) {
            mis++;
        }
        
        if (Number.isInteger(((hits + mis) / score_weergave))) {
            alert("Aantal hits: " + hits + "\nAantal mis: " + mis);
        }
    }   
}