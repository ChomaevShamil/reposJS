//Типы данных
typeof 2
typeof undefined 
typeof 10n 
typeof true 
typeof "Hello"
typeof Symbol("y")
typeof null 


//изменяемые и незменяемые типы данных
let gof = "20";
let tof = gof;
gof = "21"
alert(gof == tof)

const Days = {
    friday: 5,
    satarday: 6,
    sunday: 7
}
Days.monday = 1
console.log(Days)

//что такое ссылка на объект
let aaa = {};
let bbb = aaa; 
alert( aaa == bbb );
alert( aaa === bbb )

let aaaa = {};
let bbbb = {}; 

alert( aaaa == bbbb ); 


//NaN
getNan = 2 * undefined
isNaN(getNan)

var x = [1, 2, 3, "a", "b", "c"]; 
var a = x.toString();


//получение несуществующего свойства из объекта
ytr = {a: 123}
alert (ytr.b)



//Когда использовать null, а когда undefined?
let newVar
alert(newVar)
let newVar2 = null
alert (newVar2)


//метод hasOwnProperty
const user = {
	va: 10,
}
alert(user.hasOwnProperty('va'))
alert(user.hasOwnProperty('toString'))



//глобальные и локальные переменные
let globalVar = 10;
function vars(){
    let localVar = 5;
}
alert(globalVar)
alert(localVar)