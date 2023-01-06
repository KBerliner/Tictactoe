// The turn system uses boolean to decide if there should be an 'X' or an 'O' placed in the square.

// I just realized I don't even need the turn variable, but I'll leave it in for now until I have wifi.

let count = 1;
let turn = true;
const allSquares = document.getElementsByClassName("square");
// const thisSquare

// Arrays are confusing, USE THE INDEX an log the whole array

// This function turnCount selects the square that was clicked, changes the letter, and then adds the letter to the square's HTML.

const turnCount = function (squareIndex) {
    let thisSquareLetter = document.getElementsByClassName(`square__letter`);
    let thisSquareLetterX = document.getElementsByClassName(`square__letter--${squareIndex}x`);
    let thisSquareLetterO = document.getElementsByClassName(`square__letter--${squareIndex}o`);
    if (thisSquareLetterX[0].style.display == '') {
        console.log(thisSquareLetterX[0].style.display);
    } else {
        console.log('First Display Error');
    }
    if (typeof(thisSquareLetter) == undefined) {
        console.log("The square is undefined.");
    } else {
        console.log("The square is defined.");
    }
    if (thisSquareLetterX[0].style.display == '' && thisSquareLetterO[0].style.display == '') {
        if (count % 2 == 0) {
            turn = false;
            // console.log(thisSquareLetterO);
            thisSquareLetterO[0].style.display = 'block';
            count++;
            console.log('O Success');
        } else if (count % 2 !== 0) {
            turn = true;
            console.log(thisSquareLetterX);
            thisSquareLetterX[0].style.display = 'block';
            console.log('X Success');
            count++;
        } else {
            console.log('ERROR');
        }
    } else {
        console.log('Display ERROR');
    }
   
    

    console.log(count);
    console.log(turn);
}

