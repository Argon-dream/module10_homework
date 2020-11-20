let X = 3.14;  // здесь необходимо ввести какое-либо значение, типа число (37 или 3.14 или (42) и т.д.)
               //                                              типа строка ('bla' или '1' или (typeof 1) и т.д.)
               //                                              логического типа (true, false)
if (typeof X === "number")
{
    console.log("X is number");
}
else if (typeof X === "string")
{
    console.log("X is string");
}
else if (typeof X === "boolean")
{
    console.log("X is boolean");
}
else
{
    console.log("Type X is undefined");
}