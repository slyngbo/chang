const images = [{
    name: "cheeseburger",
    extension: ".jpg",
    price: 10,
    txt: "cheeseburgers",
    btnText: "Wanna try again?",
    audioExtension: ".mp3",
  },
  {
    name: "gold",
    extension: ".jpg",
    price: 30000,
    txt: "goldbars",
    btnText: "Wanna try again loser?",
    audioExtension: ".mp3",
  },
  {
    name: "camel",
    extension: ".jpg",
    price: 15000,
    txt: "camels",
    btnText: "how many camels for your daughter?",
    audioExtension: ".mp3",
  },
  {
    name: "cocain",
    extension: ".jpeg",
    price: 1000,
    txt: "cocains",
    btnText: "Good shit, dont go",
    audioExtension: ".mp3",
  },
  {
    name: "weed",
    extension: ".jpg",
    price: 200,
    txt: "weeds",
    btnText: "1337",
    audioExtension: ".mp3",
  },
  {
    name: "cat",
    extension: ".jpg",
    price: 550,
    txt: "cats",
    btnText: "kitty want to play",
    audioExtension: ".mp3",
  },
  {
    name: "chips",
    extension: ".jpg",
    price: 20,
    txt: "chips",
    btnText: "Will you share?",
    audioExtension: ".mp3",

  },
  {
    name: "bike",
    extension: ".jpg",
    price: 4500,
    txt: "bikes",
    btnText: "You want to try again?",
    audioExtension: ".wav",
  },
  {
    name: "cider",
    extension: ".jpg",
    price: 15,
    txt: "ciders",
    btnText: "Dont bother, just try again",
    audioExtension: ".mp3",
  },
  {
    name: "coffee",
    extension: ".jpg",
    price: 23,
    txt: "coffees",
    btnText: "too hot, wanna try again?",
    audioExtension: ".wav",
  },
  {
    name: "cola",
    extension: ".jpg",
    price: 16,
    txt: "colas",
    btnText: "Enjoy it cold",
    audioExtension: ".wav",
  },
  {
    name: "cucumber",
    extension: ".jpg",
    price: 8,
    txt: "cucumbers",
    btnText: "ehem, Neeeeeext",
    audioExtension: ".wav",
  },
  {
    name: "kebab",
    extension: ".jpg",
    price: 45,
    txt: "kebabs",
    btnText: "delicous, are you sure wanna skip?",
    audioExtension: ".mp3",
  },
  {
    name: "monster",
    extension: ".jpg",
    price: 17,
    txt: "monsters",
    btnText: "Wanna try again?",
    audioExtension: ".wav",
  },
  {
    name: "ticket",
    extension: ".png",
    price: 775,
    txt: "tickets",
    btnText: "awesome, try again?",
    audioExtension: ".wav",
  },
  {
    name: "tomatoes",
    extension: ".png",
    price: 6,
    txt: "tomatoes",
    btnText: "Tomatoes? ugh, try again?",
    audioExtension: ".wav",
  }
];


function press() {
  let moneyInput = document.getElementById('inputMoney').value;
  let ranNum = Math.round((Math.random() * images.length));
  let image = images[ranNum];
  let count = moneyInput / image.price;
  count = count.toFixed(2);
  let sound = new Audio('audio/' + image.name + image.audioExtension);
  sound.play();
  document.getElementById('img').src = "images/" + image.name + image.extension;
  document.getElementById('rslt').innerHTML = "<h2>You can get!</h2> " + count + " " + image.txt + " for " + moneyInput + " kr.";
  document.getElementById('button').innerText = image.btnText;

}
