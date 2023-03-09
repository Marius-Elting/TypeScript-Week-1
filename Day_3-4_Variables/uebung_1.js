"use strict";
const concatenate = (first, second) => {
    const contactet = first + second;
    return contactet;
};
console.log(concatenate("asd", "fisch"));
const toNumber = (numberString) => {
    const number = Number(numberString);
    return number;
};
console.log(toNumber("2"));
const chain = (text, times) => {
    let chainString = "";
    for (let i = 0; i < times; i++) {
        chainString += text;
    }
    //alternativ text.repeat(number)
    return chainString;
};
console.log(chain("abc", 1));
const isVowel = (letter) => {
    if (letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u") {
        return true;
    }
    else {
        return false;
    }
};
isVowel("b");
const vowels = (text, number) => {
    let output = text;
    let point = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "a" ||
            text[i] === "e" ||
            text[i] === "i" ||
            text[i] === "o" ||
            text[i] === "u") {
            output = output.slice(0, point) + text[i].repeat(number - 1) + output.slice(point);
            point = point + number;
        }
        point++;
    }
    return output;
};
vowels("laptop", 2);
const randomNum = () => {
    const num = Math.floor(Math.random() * 6 + 1);
    return num;
};
randomNum();
const diceGame = (player1, player2) => {
    const num1 = Math.floor(Math.random() * 6 + 1);
    const num2 = Math.floor(Math.random() * 6 + 1);
    const num = num1 + num2;
    if (player1 > 12 || player2 > 12 || player1 < 2 || player2 < 2) {
        return "only numbers between 2 and 12 are valid";
    }
    console.log(num);
    if (Math.abs(num - player1) === Math.abs(num - player2)) {
        return "draw";
    }
    else if (Math.abs(num - player1) > Math.abs(num - player2)) {
        return "player2";
    }
    else if (Math.abs(num - player1) < Math.abs(num - player2)) {
        return "player1";
    }
    return "error";
};
console.log(diceGame(2, 12));
