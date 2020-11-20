let num = prompt("Please, write a number:");

if ((typeof +num != "number") || (isNaN(+num)))
    {
        console.log("Sorry, somewhere is mistake");
    }
else
    {
        if (+num % 2 == 0) {
            console.log("even");
        } // чётное число
        else {
            console.log("odd");
        } // нечётное число
    }


