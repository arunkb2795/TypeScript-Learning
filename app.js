function add(num1, num2, isValid, label) {
    var result = num1 + num2;
    console.log(label + result + " " + isValid);
}
var num1 = 5;
var num2 = 4;
var isValid = true;
var label = "Result : ";
var result = add(num1, num2, isValid, label);
