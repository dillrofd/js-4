//1
let text1 = " Поле 1";
let tetx2 = " Поле 2";
if ( text1 !== "" && tetx2 !== "") {
    console.log ("Обидва поля заповнені");
} 
else {
    console.log( "Не всі поля заповнені");
}


//2
let  number1 = 7;
let number2 = 4;
let together = number1 + number2;

if ( together > 10 ) {
    console.log ( " Сума більша за 10 ");
}
else {
    console.log ( "Сума менша або дорівнює 10");
}



//3
let textSaved = "I learning ";
if (textSaved.includes("JavaScript")) {
    console.log (  "Текст містить слово JavaScript"); 
}
else {
    console.log(  "Текст не містить слово JavaScript");
}



//4
let anyNumer = 13;
if (anyNumer > 10 && anyNumer < 20 ){
    console.log ( "Число входить в діапазон від 10 до 20");
}
else {
    console.log (  "Число не входить в діапазон від 10 до 20");
}

//5

let name = "Jungkook";
let email = "jeon.jungkook@gmail.com";
let password = 123456756;

let nameValid = name.trim().length >= 3;
let dIndex = email.indexOf("@");
let pIndex = email.lastIndexOf(".")
let emailValid = dIndex > 0 && pIndex > dIndex + 1 && pIndex < email.length - 1;
let passwordValid = password.toString().length >= 6; 


if ( nameValid && emailValid && passwordValid ) {
    console.log( "Перенаправлення на іншу сторінку");
}
else {
    console.log(  "Помилка: неправильне заповнення");
}

