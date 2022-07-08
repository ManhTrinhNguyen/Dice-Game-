const randomNumber1 = Math.floor(Math.random()*6) + 1
const randomNumber2 = Math.floor(Math.random()*6) + 1
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const text = document.querySelector("h1")

const randomImg1 = img1.setAttribute("src", "images/dice" + randomNumber1 + ".png")
const randomImg2 = img2.setAttribute("src", "images/dice" + randomNumber2 + ".png")

if (randomNumber1 > randomNumber2) {
    text.innerHTML = "Player 1 Win"
} else {
    text.innerHTML = "Player 2 Win"
}