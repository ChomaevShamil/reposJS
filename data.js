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