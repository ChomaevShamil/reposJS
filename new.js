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