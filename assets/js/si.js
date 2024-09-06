var schuh1 = 100;
var einnahmen = 0;
var konto = 0;


// Intervall, alle 1000ms ausführen
var intervalId = window.setInterval(
    
    function(){
        einnahmen = schuh1;
        document.getElementById('einnahmen').innerHTML = einnahmen + " €";
        konto = konto + schuh1;
        document.getElementById('konto').innerHTML = konto + " €";
    }, 
1000);