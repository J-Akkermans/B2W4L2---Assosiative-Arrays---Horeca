

var product = {
    fris: 0,
    bier: 0,
    wijn: 0,
};

const prijzen = {
    fris: 1.20,
    bier: 2.20,
    wijn: 3.00
}

var totals = {
    fris: 0,
    bier: 0,
    wijn: 0
}

var audio = new Audio('audio/ching.mp3');

order()

function order() {
    orderStatus = true;
    while (orderStatus == true) {
        var orderStart = prompt("Wat wilt u bestellen? \n Fris, Bier of Wijn").toLowerCase();
        switch (orderStart) {
            case 'stop':
                orderStatus = false;
                if (product['fris'] == 0 && product['bier'] == 0 && product['wijn'] == 0) {
                    alert("U heeft geen bestelling toegevoeged 🙂")
                } else {
                    totals['fris'] = product['fris']*prijzen['fris']  
                    totals['bier'] = product['bier']*prijzen['bier']  
                    totals['wijn'] = product['wijn']*prijzen['wijn']  
                    document.getElementById("demo").innerHTML = "Fris Aantal:" + product['fris'] + " \u20AC"+ totals['fris'] +"<br>" + "Bier Aantal:" + product['bier'] + " \u20AC"+ totals['bier'] +"<br>" + "Wijn Aantal:" + product['wijn'] + " \u20AC"+ totals['wijn'] +"<br>"
                  
                }
                break;
            case 'fris':
                var frisQuest = prompt("Hoeveel fris wilt u? \nVul het aantal fris in nummers in \nWilt u toch geen fris dan kunt u 0 of tekst invullen.");
                frisQuest = parseInt(frisQuest);
                if (isNaN(frisQuest) || frisQuest == 0) {
                    alert("Dit is geen geldige invoer. \n U keert nu terug naar het keuzemenu.")
                    order();
                } else {
                    product['fris'] = frisQuest;
                    alert("U heeft " + product['fris'] + "x fris besteld. 🥤")
                }
                break;
            case 'bier':
                var bierQuest = prompt("Hoeveel bier wilt u? \nVul het aantal bier in nummers in \nWilt u toch geen bier dan kunt u 0 of tekst invullen.");
                bierQuest = parseInt(bierQuest);
                if (isNaN(bierQuest) || bierQuest == 0) {
                    alert("Dit is geen geldige invoer. \n U keert nu terug naar het keuzemenu.")
                    order();
                } else {
                    product['bier'] = bierQuest;
                    alert("U heeft " + product['bier'] + "x bier besteld. 🍺")
                }
                break;
            case 'wijn':
                var wijnQuest = prompt("Hoeveel wijn wilt u? \nVul het aantal wijn in nummers in \nWilt u toch geen wijn dan kunt u 0 of tekst invullen.");
                wijnQuest = parseInt(wijnQuest);
                if (isNaN(wijnQuest) || wijnQuest == 0) {
                    alert("Dit is geen geldige invoer. \n U keert nu terug naar het keuzemenu.")
                    order();
                } else {
                    product['wijn'] = wijnQuest;
                    alert("U heeft " + product['wijn'] + "x wijn besteld. 🍷")
                }
                break;
            default:
                // code block
        }
    }
}