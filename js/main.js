function press() {
  var ranNum = Math.floor((Math.random() * 5) + 1);
  if(ranNum == 1) {
    document.getElementById('img').src = "\\images\\cheesburger.jpg";
    var price = document.getElementById('inputMoney').value;
    var count = price / 10;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2> " + count + " cheesburgers for " + price + " kr.";
    document.getElementById('button').innerText = "Wanna try again?";
  }
  else if(ranNum == 2) {
    document.getElementById('img').src = "\\images\\gold.jpg";
    var price = document.getElementById('inputMoney').value;
    var count = price / 30000;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2> " + count + " goldbars for " + price + " kr.";
    document.getElementById('button').innerText = "Wanna try again loser?";
  }
  else if (ranNum == 3) {
    document.getElementById('img').src = "\\images\\beer.jpg";
    var price = document.getElementById('inputMoney').value;
    var count = price / 30;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " beers for " + price + " kr.";
    document.getElementById('button').innerHTML = "Don't get to drunk";
  }
  else if (ranNum == 4) {
    document.getElementById('img').src = "\\images\\cat.jpg";
    var price = document.getElementById('inputMoney').value;
    var count = price / 1500;
    document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " cats for " + price + " kr.";
    document.getElementById('button').innerHTML = "Cute kitty, try again?";
}
 else if (ranNum == 5) {
  document.getElementById('img').src = "\\images\\horse.jpg";
  var price = document.getElementById('inputMoney').value;
  var count = price / 15000;
  document.getElementById('rslt').innerHTML = "<h2>You can get!</h2>" + count + " horses for " + price + " kr.";
  document.getElementById('button').innerHTML = "boring next?";
}
}
