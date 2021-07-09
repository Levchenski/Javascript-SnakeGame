const canvas = document.getElementsByClassName('game')[0];
const ctx = canvas.getContext('2d');
const ground = new Image();
ground.src = "img/1562688808.png";
const food = new Image();
food.src = "img/1562688805.png";
let box = 32;

let score = 0;

function drawGame() {
    ctx.drawImage(ground, 0, 0);
}
