// The turn system uses boolean to decide if there should be an 'X' or an 'O' placed in the square.

// I just realized I don't even need the turn variable, but I'll leave it in for now until I have wifi.

let count = 1;
let turn = true;
const allSquares = document.getElementsByClassName("square");
const xWin = document.getElementsByClassName('x-win-screen')[0];
const oWin = document.getElementsByClassName('o-win-screen')[0];
const draw = document.getElementsByClassName('draw-screen')[0];
const winBar = document.getElementsByClassName('winbar')[0];

let gridArray = [null, null, null, null, null, null, null, null, null];

let winScreen = function (player) {
    
    setTimeout(() => {
        document.getElementsByClassName(`${player}-win-screen`)[0].style.display = 'block';
    }, 1000);
}

// function winBarRotate () {
//     winBar.style.transform = 'rotate(90deg)'
//     // setTimeout(() => {
//         winBar.style.transition = 'all ease-in-out 250ms';
//         // winBar.style.transform = 'scaleX(1) rotate(90deg)';
//     // }, 250);
// }

function winAcross (i) {
    let barDown = (33 + (3.5 * i));
    if (gridArray[i] == true && gridArray[i + 1] == true && gridArray[i + 2] == true) {
        console.log('x win');
        winBar.style.top = `${barDown}vh`;
        winBar.style.animation = 'grow 250ms both alternate';
        winScreen('x');
    } else if (gridArray[i] == false && gridArray[i + 1] == false && gridArray[i + 2] == false) {
        console.log('o win');
        winBar.style.top = `${barDown}vh`;
        winBar.style.animation = 'grow 250ms both alternate';
        winScreen('o');
    };
}

function winDown (i) {
    let barAcross = (41 + (9 * i));
    if (gridArray[i] == true && gridArray[i + 3] == true && gridArray[i + 6] == true) {
        console.log('x win');
        winBar.style.top = '29vh';
        winBar.style.left = `${barAcross}vw`;
        winBar.style.animation = 'growtate90 250ms both alternate';
        // winBar.classList.add('rotate90');
        // winBar.style.transform = 'rotate(90deg)';
        // winBar.style.transform = 'scaleX(1) rotate(90deg)';
        // winBar.style.transition = 'all ease-in-out 0ms';
        // winBarRotate();
        // winBar.style.transform = 'scaleX(1) rotate(90deg)';
        
        winScreen('x');
    } else if (gridArray[i] == false && gridArray[i + 3] == false && gridArray[i + 6] == false) {
        console.log('o win');
        winBar.style.top = '29vh';
        winBar.style.left = `${barAcross}vw`
        winBar.style.animation = 'growtate90 250ms both alternate';
        winScreen('o');
    }
}

function winDaigonal () {
    if (gridArray[0] == true && gridArray[4] == true && gridArray[8] == true) {
        console.log('x win');
        winBar.style.top = '29vh'
        winBar.style.animation = 'growtate45 250ms both alternate';
        winScreen('x');
    } else if (gridArray[0] == false && gridArray[4] == false && gridArray[8] == false) {
        console.log('o win');
        winBar.style.top = '29vh'
        winBar.style.animation = 'growtate45 250ms both alternate';
        winScreen('o');
    }
    if (gridArray[2] == true && gridArray[4] == true && gridArray[6] == true) {
        console.log('x win');
        winBar.style.top = '29vh';
        winBar.style.left = '62vw';
        winBar.style.animation = 'growtate135 250ms both alternate';
        winScreen('x');
    } else if (gridArray[2] == false && gridArray[4] == false && gridArray[6] == false) {
        console.log('o win');
        winBar.style.top = '29vh';
        winBar.style.left = '61vw';
        winBar.style.animation = 'growtate135 250ms both alternate';
        winScreen('o');
    }
}

function ifWin () {
    winAcross(0);
    winAcross(3);
    winAcross(6);
    winDown(0);
    winDown(1);
    winDown(2);
    winDaigonal();
    if (gridArray.includes(null)) {
    } else {
        console.log('Draw!');
        draw.style.display = 'block';
    }
}




let winning = function (currentIndex, player) {
        // console.log(`The length of allSquares is ${allSquares.length}.`)
        /* The Problem I'm having with this function is when it checks for the next same letter, it might go too far. For example,
        if an x is placed in the middle box, then the middle box plus 3 positions is a real spot, but the middle box plus
        6 positions is not a real spot */
        // console.log(gridArray[currentIndex] + ' ' + gridArray[currentIndex + 3] + ' ' + gridArray[currentIndex + 6])
        if (gridArray[currentIndex + 3] == player) {
            if (gridArray[currentIndex + 6] == player) {
                if (player) {
                    player = 'x';
                    return console.log(player + ' Wins!');
                } else if (!player) {
                    player = 'o'
                    return console.log(player + ' Wins!');
                }
            }
        } else if (gridArray[currentIndex + 3] == player) {
            if (gridArray[currentIndex + 7] == player) {
                if (player) {
                    player = 'x';
                    return console.log(player + ' Wins!');
                } else if (!player) {
                    player = 'o'
                    return console.log(player + ' Wins!');
                }
            }
        } else {
            // return console.log(allSquares + ' ' + currentIndex + ' ' + player);
        }
}
// const thisSquare

// Arrays are confusing, USE THE INDEX an log the whole array

// This function turnCount selects the square that was clicked, changes the letter, and then adds the letter to the square's HTML.

const turnCount = function (squareIndex) {
    let thisSquareLetter = document.getElementsByClassName(`square__letter`);
    let thisSquareLetterX = document.getElementsByClassName(`square__letter--${squareIndex}x`);
    let thisSquareLetterO = document.getElementsByClassName(`square__letter--${squareIndex}o`);
    if (thisSquareLetterX[0].style.display == '') {
        // console.log(thisSquareLetterX[0].style.display);
    } else {
        console.log('First Display Error');
    }
    if (typeof(thisSquareLetter) == undefined) {
        console.log("The square is undefined.");
    } else {
        // console.log("The square is defined.");
    }
    if (thisSquareLetterX[0].style.display == '' && thisSquareLetterO[0].style.display == '') {
        if (count % 2 == 0) {
            turn = false;
            // console.log(thisSquareLetterO);
            thisSquareLetterO[0].style.display = 'block';
            count++;
            // console.log('O Success');
            gridArray[squareIndex] = false;
            winning(squareIndex, false);
        } else if (count % 2 !== 0) {
            turn = true;
            // console.log(thisSquareLetterX);
            thisSquareLetterX[0].style.display = 'block';
            // console.log('X Success');
            count++;
            gridArray[squareIndex] = true;
            winning(squareIndex, true);

        } else {
            console.log('ERROR');
        }
    } else {
        console.log('Display ERROR');
    }
   
    ifWin();

    // console.log(count);
    // console.log(turn);

    
    // console.log(gridArray[squareIndex]);
    // console.log(gridArray);
}

const reset = function (winner) {
    console.log('Reset Initiated');
    count = 1;
    turn = true;
    xWin.style.display = 'none';
    oWin.style.display = 'none';
    draw.style.display = 'none';
    for (i = 0; i < allSquares.length; i++) {
        document.getElementsByClassName(`square__letter--${i}x`)[0].style.display = '';
        document.getElementsByClassName(`square__letter--${i}o`)[0].style.display = '';
    }
    gridArray = [null, null, null, null, null, null, null, null, null];
    winBar.style.animation = 'none';
    winBar.style.top = '29vh';
    winBar.style.left = '38vw';
}

// False win for testing

// const falseWin = function (player) {
//     let screen = `${player}-win-screen`;
//     screen[0].style.display = 'block';
// }