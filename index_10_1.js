let num = prompt("Please, write a number:");

if (typeof +num != "number" || isNaN(+num)) // В данном случае, когда у нас только 2 операнда, объединенных логическим ИЛИ, можно не ставить скобки, чтобы визуально не усложнять код :)
    {
        console.log("Sorry, somewhere is mistake");
    }
else if (+num % 2 == 0) {
    console.log("even");
} // чётное число
else {
    console.log("odd");
} // нечётное число

// Тут тоже можно упростить, т.к. лишняя вложенность операторов в данном случае не несет практического смысла
