function press() {
  let ranNum = Math.floor((Math.random() * 8) + 1);
  if(ranNum == 1) {
    document.getElementById('img').src = "\\images\\cheesburger.jpg";
    let price = document.getElementById('inputMoney').value;
    let count = price / 10;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2> " + count + " cheesburgers for " + price + " kr.";
    document.getElementById('button').innerText = "Wanna try again?";
  }
  else if(ranNum == 2) {
    document.getElementById('img').src = "\\images\\gold.jpg";
    let price = document.getElementById('inputMoney').value;
    let count = price / 30000;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2> " + count + " goldbars for " + price + " kr.";
    document.getElementById('button').innerText = "Wanna try again loser?";
  }
  else if (ranNum == 3) {
    document.getElementById('img').src = "\\images\\beer.jpg";
    let price = document.getElementById('inputMoney').value;
    let count = price / 30;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " beers for " + price + " kr.";
    document.getElementById('button').innerHTML = "Don't get to drunk";
  }
  else if (ranNum == 4) {
    document.getElementById('img').src = "\\images\\cat.jpg";
    let price = document.getElementById('inputMoney').value;
    let count = price / 1500;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " cats for " + price + " kr.";
    document.getElementById('button').innerHTML = "Cute kitty, try again?";
}
 else if (ranNum == 5) {
  document.getElementById('img').src = "\\images\\horse.jpg";
  let price = document.getElementById('inputMoney').value;
  let count = price / 15000;
  document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " horses for " + price + " kr.";
  document.getElementById('button').innerHTML = "boring next?";
}
else if (ranNum == 6) {
 document.getElementById('img').src = "\\images\\camel.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 4200;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " camels for " + price + " kr.";
 document.getElementById('button').innerHTML = "try again?";
}
else if (ranNum == 7) {
 document.getElementById('img').src = "\\images\\cocain.jpeg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 600;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " pr. gram for " + price + " kr.";
 document.getElementById('button').innerHTML = "White nose?";
}
else if (ranNum == 8) {
 document.getElementById('img').src = "\\images\\monster.jpg";
 let price = document.getElementById('inputMoney').value;
 let count = price / 15;
 document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " Monster for " + price + " kr.";
 document.getElementById('button').innerHTML = "More energy?";
}
}
