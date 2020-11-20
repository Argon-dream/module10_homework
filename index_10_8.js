let map = new Map(); // ассоциативный массив
map.set("a", "string");
map.set(1, "number");
map.set(false, "boolean");

for (let name of map.keys()){ // получим все ключи массива
    console.log(`Ключ — ${name}, значение — ${map.get(name)}`); //у каждого ключа вытащим значение (записано в шаблонной строке)
}