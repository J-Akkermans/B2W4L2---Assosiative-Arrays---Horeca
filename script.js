const drinkPrice = [2.30, 3.00, 2.50]; //Array van prijzen. 

var drinkTotals = [0, 0, 0]

var frisAantal = 0; //Variables die aantal keer een bepaald drankje bijhoud. 
var bierAantal = 0;
var wijnAantal = 0;

// var bierAantalQeust = 0;
// var frisAaantalQeust = 0;
// var wijnAantalQeust = 0;


// var aantalBitterBallen = 0;
// var aantalBitterbalSchaalAcht = 0;
// var aantalBitterbalSchaalZestien = 0;

// const bitterBallenPrijs = [3.59, 5.40]
// var bitterBallenTotals = [0, 0]


var product = {
    fris: 0,
    bier: 0,
    wijn: 0,
    // aantalBitterBallenAcht: 0,
    // aantalBitterbalSchaalZestien: 0
};
// var frisQuest = prompt("Hoeveel fris wilt u?");
// var frisQuest = parseInt(frisQuest)
// product['fris'] = frisQuest;
// console.log(product['fris'])



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
                    // var data = Object.values(product);
                    var data = JSON.stringify(product);
                    data = data.replace(/("{|}")/gi,'"');
                    document.getElementById("demo").innerHTML = data ;

                    
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