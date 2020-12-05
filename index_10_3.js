let str = "Hello";  // здесь необходимо ввести какую-либо строку
let newString = "";

for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
}
console.log(newString); // результат - перевернутая строка

// Решение верное, но можно упростить и решить без использования циклв:

let reverseString = str.split('').reverse().join('');