let a = prompt("Rəqəm daxil edin.");
let operator = prompt ("Hesablamaq üçün birini seçin-  %;  -;  *;  /");
let b = prompt("Digər rəqəmi daxil edin.");

switch (operator){
    case "%":
        console.log (a%b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
    default:
        console.log("Xahiş olunur rəqəm daxil edin..")
}


