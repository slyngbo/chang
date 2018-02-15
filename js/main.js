const images = [{
    name: "cheeseburger",
    extension: ".jpg",
    price: 10,
    txt: "cheeseburgers",
    btnText: "Wanna try again?",
  },
  {
    name: "gold",
    extension: ".jpg",
    price: 30000,
    txt: "goldbars",
    btnText: "Wanna try again loser?",
  },
  {
    name: "camel",
    extension: ".jpg",
    price: 15000,
    txt: "camels",
    btnText: "how many camels for your daughter?",
  },
  {
    name: "cocain",
    extension: ".jpeg",
    price: 1000,
    txt: "cocains",
    btnText: "Good shit, dont go",
  },
  {
    name: "weed",
    extension: ".jpg",
    price: 200,
    txt: "weeds",
    btnText: "1337",
  },
  {
    name: "cat",
    extension: ".jpg",
    price: 550,
    txt: "cats",
    btnText: "kitty want to play",
  },
  {
    name: "chips",
    extension: ".jpg",
    price: 20,
    txt: "chips",
    btnText: "Will you share?",
    // missing sound
  },
  {
    name: "bike",
    extension: ".jpg",
    price: 4500,
    txt: "bikes",
    btnText: "You want to try again?",
    // missing sound
  },
  {
    name: "cider",
    extension: ".jpg",
    price: 550,
    txt: "ciders",
    btnText: "Dont bother, just try again",
    // missing sound
  },
  {
    name: "coffee",
    extension: ".jpg",
    price: 23,
    txt: "coffees",
    btnText: "too hot, wanna try again?",
    // missing sound
  },
  {
    name: "cola",
    extension: ".jpg",
    price: 16,
    txt: "colas",
    btnText: "Enjoy it cold",
    // missing sound
  },
  {
    name: "cucumber",
    extension: ".jpg",
    price: 8,
    txt: "cucumbers",
    btnText: "ehem, Neeeeeext",
    // missing sound
  },
  {
    name: "kebab",
    extension: ".jpg",
    price: 23,
    txt: "kebabs",
    btnText: "delicous, are you sure wanna skip?",
    // missing sound
  },
  {
    name: "monster",
    extension: ".jpg",
    price: 23,
    txt: "monsters",
    btnText: "too hot, wanna try again?",
    // missing sound
  },
  {
    name: "ticket",
    extension: ".png",
    price: 23,
    txt: "tickets",
    btnText: "awesome, try again?",
    // missing sound
  },
  {
    name: "tomatoes",
    extension: ".png",
    price: 6,
    txt: "tomatoes",
    btnText: "Tomatoes? ugh, try again?",
    // missing sound
  }
];


function press() {
  let moneyInput = document.getElementById('inputMoney').value;
  let ranNum = Math.floor((Math.random() * images.length));
  let image = images[ranNum];
  let count = moneyInput / image.price;
  let sound = new Audio('audio/' + image.name + '.mp3');
  sound.play();
  document.getElementById('img').src = "images/" + image.name + image.extension;
  document.getElementById('rslt').innerHTML = "<h2>You can get!</h2> " + count + " " + image.txt + " for " + moneyInput + " kr.";
  document.getElementById('button').innerText = image.btnText;

}
