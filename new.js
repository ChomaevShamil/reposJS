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