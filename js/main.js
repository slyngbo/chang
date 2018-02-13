function press() {
  let ranNum = Math.round((Math.random() * 18));
  if(ranNum == 1) {
    document.getElementById('img').src = "images/cheesburger.jpg";
    let price = document.getElementById('inputMoney').value;
    let count = price / 10;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2> " + count + " cheesburgers for " + price + " kr.";
    document.getElementById('button').innerText = "Wanna try again?";
  }
  else if(ranNum == 2) {
    document.getElementById('img').src = "images/gold.jpg";
    let price = document.getElementById('inputMoney').value;
    let count = price / 30000;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2> " + count + " goldbars for " + price + " kr.";
    document.getElementById('button').innerText = "Wanna try again loser?";
  }
  else if (ranNum == 3) {
    document.getElementById('img').src = "images/beer.jpg";
    let price = document.getElementById('inputMoney').value;
    let count = price / 30;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " beers for " + price + " kr.";
    document.getElementById('button').innerHTML = "Don't get to drunk";
  }
  else if (ranNum == 4) {
    document.getElementById('img').src = "images/cat.jpg";
    let price = document.getElementById('inputMoney').value;
    let count = price / 1500;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " cats for " + price + " kr.";
    document.getElementById('button').innerHTML = "Cute kitty, try again?";
}
 else if (ranNum == 5) {
  document.getElementById('img').src = "images/horse.jpg";
  let price = document.getElementById('inputMoney').value;
  let count = price / 15000;
  document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " horses for " + price + " kr.";
  document.getElementById('button').innerHTML = "boring next?";
}
else if (ranNum == 6) {
 document.getElementById('img').src = "images/camel.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 4200;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " camels for " + price + " kr.";
 document.getElementById('button').innerHTML = "try again?";
}
else if (ranNum == 7) {
 document.getElementById('img').src = "images/cocain.jpeg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 600;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " pr. gram C***** for " + price + " kr.";
 document.getElementById('button').innerHTML = "White nose?";
}
else if (ranNum == 8) {
 document.getElementById('img').src = "images/monster.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 15;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " Monster for " + price + " kr.";
 document.getElementById('button').innerHTML = "More energy?";
}
else if (ranNum == 9) {
 document.getElementById('img').src = "images/tomatoes.png";
 let price = document.getElementById('inputMoney').value;
 let count = price / 20;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " pr. 200gram for " + price + " kr.";
 document.getElementById('button').innerHTML = "Go healthy!";
}
else if (ranNum == 10) {
 document.getElementById('img').src = "images/ticket.png";
 let price = document.getElementById('inputMoney').value;
 let count = price / 110;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + "  ticket for " + price + " kr.";
 document.getElementById('button').innerHTML = "Movie movie movie!";
}
else if (ranNum == 11) {
 document.getElementById('img').src = "images/coffee.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 35;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " coffee for " + price + " kr.";
 document.getElementById('button').innerHTML = "Coffee?";
}
else if (ranNum == 12) {
 document.getElementById('img').src = "images/cucumber.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 110;
 document.getElementById('rslt').innerHTML = "<h2> You can get!</h2>" + count + " of cucumber for " + price + " kr.";
 document.getElementById('button').innerHTML = ":D";
}
else if (ranNum == 13) {
 document.getElementById('img').src = "images/cola.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 12;
 document.getElementById('rslt').innerHTML = "<h2>You can get! </h2>" + count + " cola for " + price + " kr.";
 document.getElementById('button').innerHTML = "Taste it!";
}
else if (ranNum == 14) {
 document.getElementById('img').src = "images/kebab.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 50;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " kebab for " + price + " kr.";
 document.getElementById('button').innerHTML = "Best food when you are drunk";
}
else if (ranNum == 15) {
 document.getElementById('img').src = "images/bike.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 1200;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " of a bike for " + price + " kr.";
 document.getElementById('button').innerHTML = "Ride it!";
}
else if (ranNum == 16) {
 document.getElementById('img').src = "images/cider.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 25;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " of cider for " + price + " kr.";
 document.getElementById('button').innerHTML = "Nice drink!";
}
else if (ranNum == 17) {
 document.getElementById('img').src = "images/chips.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 20;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " per pack for " + price + " kr.";
 document.getElementById('button').innerHTML = "JAmmmY!";
}
}
