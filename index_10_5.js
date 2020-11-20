let arr = [4,2,3,1];
console.log("Количество элементов в массиве: ", arr.length);
console.log("Элементы массива: ");
let result = arr.map(function(item, index, array) {
    console.log(item);
    return item;
});
console.log("Массив: ", result);