//Что такое объект?
const a = {
    a: 1,
    b: 2
}


//Как добавить свойство в объект?
const b = {}
b.a = 1



//Как удалить свойство из объекта?
const c = {
    a: 1,
    b: 2
}
delete c.b


//методы объектов 
let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };
let obj = Object.assign(o1, o2, o3);

let o4 = {}
o4.is(window, window)


//Деструктуризация объекта
d = {
    a: 1,
    b: 2,
    c: 3,
}

const {a, b, c = d}


//пробел в свойстве
let person = {
    name: "a",
    "year of birth": 1980,
    specialty: "c"
  }
  alert( person.name );          
  alert( person['name'] );    
  alert( person.specialty );   
  alert( person['year of birth'] );




//сравнение 
const tom = { name: "Tom"};
const bob = tom;
console.log(tom == bob);  



