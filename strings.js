//Как явно преобразовать переменную к строке?Когда происходит неявное преобразование к строке?
let u = 123;
u = String(u) 
alert(typeof u)

123.51351.toString()


//Как посмотреть длину строки?
'Hello world'.length


//Как проверить есть ли в строке какое-нибудь слово?
let g = "Hello world"
console.log(g)


//Как взять подстроку от строки?
const newStr = "Hello world"
console.log(newStr.substring(5));



//Как привести строку к верхнему регистру, а потом - к нижнему?
"HELLO WORLD".toLowerCase()
"hello world".toUpperCase()



//Как преобразовать строку в массив символов?
"Hello world".split("")



//Как проверить входит ли одна строка в другую?
const string = "Hello world",
    substring = "world";
string.includes(substring);