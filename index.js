// Easy and simple solution
// var randomNumber1;
// var randomNumber2;

// randomNumber1 = Math.floor((Math.random() * 6) + 1 );
// randomNumber2 = Math.floor((Math.random() * 6) + 1 );

// document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
// document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

// More complex but cleaner and more efficient solution
var randomNumber = [];

for (let index = 0; index < 2; index++) {
  randomNumber.push(Math.floor(Math.random() * 6) + 1);
}

for (let index = 0; index < 2; index++) {
  document.querySelector(".img" + (index + 1)).src =
    "images/dice" + randomNumber[index] + ".png";
}

document
  .querySelector(".restart-button")
  .addEventListener("click", function () {
    window.location.reload();
  });

// change attribute directly
// -> document.setAttribute("src", "images/dice6.png");
if (randomNumber[0] < randomNumber[1]) {
  document.querySelector(".big-header").innerHTML = "Player 2 Wins! 🍾";
} else if (randomNumber[0] > randomNumber[1]) {
  document.querySelector(".big-header").innerHTML = "🍾 Player 1 Wins!";
} else {
  document.querySelector(".big-header").innerHTML = "Draw!";
}
