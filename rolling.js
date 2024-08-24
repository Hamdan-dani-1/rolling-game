const rolldice = document.querySelector('.roll-dicee');
const holddice = document.querySelector('.hold-dicee');
const resetdice = document.querySelector('.reset');
const image2 = document.querySelector('.images');
const p1score = document.querySelector('.player1score');
const p2score = document.querySelector('.player2score');
const currentscore1 = document.querySelector('.current1');
const currentscore2 = document.querySelector('.current2');
const hol1 = document.querySelector('.player1');
const hol2 = document.querySelector('.player2');

let currentscore = 0;
let player = 1; 

function rolldicee() {
    const val = Math.trunc(Math.random() * 6) + 1;
    console.log(val);

    if (val !== 1) {
        image2.classList.remove('hidden');
        image2.src = `dice-${val}.png`;
        currentscore += val;

        if (player === 1) {
            currentscore1.textContent = currentscore;
        } else {
            currentscore2.textContent = currentscore;
        }
    } else {
        player2();
    }
}

function holddicee() {
    if (player === 1) {
        p1score.textContent = parseInt(p1score.textContent) + currentscore;
        currentscore1.textContent = 0;
    } else {
        p2score.textContent = parseInt(p2score.textContent) + currentscore;
        currentscore2.textContent = 0;
    }
    currentscore = 0;
    player2();
}

function resetdicee() {
    p1score.textContent = 0;
    p2score.textContent = 0;
    currentscore1.textContent = 0;
    currentscore2.textContent = 0;
    currentscore = 0;
    player = 1;
    image2.classList.add('hidden');
    hol1.classList.remove("bgc");
    hol2.classList.remove("bgc");
}

function player2() {
    if (player === 1) {
        player = 2;
        currentscore1.textContent = 0;
        currentscore2.textContent = parseInt(currentscore2.textContent) + currentscore;
        hol1.classList.remove("bgc");
        hol2.classList.add("bgc");
    } else {
        player = 1;
        currentscore2.textContent = 0;
        currentscore1.textContent = parseInt(currentscore1.textContent) + currentscore;
        hol2.classList.remove("bgc");
        hol1.classList.add("bgc");
    }
    currentscore = 0;
}

rolldice.addEventListener('click', rolldicee);
holddice.addEventListener('click', holddicee);
resetdice.addEventListener('click', resetdicee);
