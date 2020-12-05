let arr = [4,'r',5,7,23,6,null,NaN,0];
// Здесь можно чуть сократить код и объявить переменные в одну строку
let oddElem = 0, evenElem = 0, zeroElem = 0, otherElem = 0;
for (let i=0; i<arr.length;i++)
{
    if (typeof arr[i] != "number" || isNaN(arr[i])) // скобки в данном случае лишние
    {
        otherElem=otherElem+1; //суммируем не числовые элементы
    }
    else if (arr[i] == 0)
    {
        zeroElem=zeroElem+1;
    } // суммируем нули
    else if (arr[i] % 2 == 0)
    {
        evenElem=evenElem+1;
    } // суммируем чётные числа
    else
    {
    oddElem=oddElem+1;
    } // суммируем нечётные числа
}
console.log("Number of even: ", evenElem);
console.log("Number of odd: ", oddElem);
console.log("Number of zero: ", zeroElem);
console.log("Number of other elements: string, boolean, null and etc. - ", otherElem);