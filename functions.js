//Что такое функция? К какому типу данных относится?
function first(i) {
    return i ** 2
}
alert(typeof first)



//Стрелочные функции и их использование
let double = n => n * 2;


//анонимные функции 
const t = function(x){
    return x+1
}


//Важен ли для функции порядок аргументов? Что такое arguments?
function tr(a, b, c) {
    console.log(arguments[2]);
    console.log(arguments[0]);
    console.log(arguments[1]);
  }
tr(1,2,3)


//Зацикливание 
function h(n){
    return function(num){
        return num + n
    }
}
const m = h(1)
const r = h(10)
console.log(m(10))
console.log(r(100))


//callback 

function hello(x) {
    alert('Hello ' + x);
  }
  
  function world(callback) {
    let name = "world";
    callback(name);
  }
  world(hello)
