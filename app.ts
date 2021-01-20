function add(num1: number, num2: number, isValid: boolean, label: string) {
    let result = num1 + num2;
    console.log(label+result+" "+isValid)
}
const num1 = 5;
const num2 = 4;
const isValid = true;
const label="Result : "
const result = add(num1, num2,isValid,label);