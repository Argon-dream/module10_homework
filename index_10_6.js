let arr = [4,4,4,4]; // изменяемые массив (если в нем все элементы одинаковые, то результат - истина)
let allElemSame = false;
for(let i=0; i<arr.length-1; i++)
{
    if (arr[0]==arr[i+1])
    {allElemSame = true;}
    else {allElemSame = false; break;} //если элементы не совпали - сразу выходим из цикла
}
console.log(allElemSame);