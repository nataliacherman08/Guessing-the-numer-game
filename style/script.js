//Type Writer Effect
let speed = 100;
let i = 0;

let h = document.getElementById('typeWriter');
let text = 'Guess a number between 1 and 100';

function typeWriterEffect() {
    if (i < text.length) {
        h.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriterEffect, speed);
    }
}

typeWriterEffect();

//Number guess game :
let btn = document.getElementById('btn');
let output = document.getElementById('output-text');

let number = [Math.floor(Math.random() * 100) + 1];

btn.addEventListener('click', () => {
    let input = document.getElementById('user-input').value;

    if (input < number) {
        output.innerHTML = 'Too low !'
    } else if (input > number) {
        output.innerHTML = 'Too high !'
    } else {
        output.innerHTML = 'You guessed right !';
    }
})