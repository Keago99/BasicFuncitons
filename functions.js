function add7(number){
    let newNumber = number + 7;
    console.log(newNumber);
}

function multiply(number1, number2){
    let newNumber  = number1 * number2;
    console.log(newNumber);
}

function capitalize(string){
    let newUpper = string[0].toUpperCase();
    let newWord = (newUpper + string.substring(1));
    console.log(newWord);
}


add7(400);
multiply(4,10);
capitalize("fart");
capitalize("FART");
capitalize("fArT");


