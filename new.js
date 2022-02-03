// var, let, const
const a = {
    b: 1,
    y: 2
}
const isA = a
isA.c = "abc"
console.log(isA)
let t
t = 10

// синтаксис усл операторов
let A;
if (confirm("Are you over 18?")) {
    A = prompt("What's your name?", A)
    alert("Welcome, " + A);
} else
    alert("Access denied");


// Синтаксис различных видов цикла
let R = 0
while (R < 5) {
    console.log(R);
    R++;
}
for (let R = 0; R < 6; R++) {
    console.log(R);
    if (R == 3) continue;
    if (R == 3) break;
    if (R == 5) break;
}


// операторы =, ==, ===
let p = "0" 
let l = 0
if (p == l){
    console.log(true)
}
else
    console.log(false)
if (p === l){
    console.log(true)}
    else
    console.log(false)


//функции
sum(2,2)
function sum(a,b){
    c = a + b
    console.log(c)
}

const newFunction = (a, b) => {
    let c
    a += 1
    c = a + b
    return c
}
newFunction(3,3)


//ОПЕРАТОР THIS
let user = {
    name: "John",
    age: 30,
    sayHi() {
      alert(this.name);
    }
  };
  
  user.sayHi();