var resultArray = [
  { name: 'Cheesburgers', image: 'images/cheesburger.jpg', amount: 10 },
  { name: 'Gold', image: 'images/gold.jpg', amount: 20000 }
];

document.getElementById("clicked").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("clicked").innerHTML = "fml";
}
