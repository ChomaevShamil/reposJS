// Что такое массив? Как создать новый пустой массив? Может ли массив содержать элементы разных типов?
let array1 = []
array2 = [2, true, "Hello world"]


//Добавление и удаление элемента из массива 
let aa = []
aa[0] = "Hello world"
aa [1] = 1
aa.push("last value")
aa.pop(2)
aa.shift()
aa.unshift("first value")
delete aa[0]


//Использование индексов массива (поиск элемента / удаление)
newArr = [[1,2,"Hello world"], ["a", "d"], ["kill me","change me","don't touch"]]
newArr[2].splice(0,2, "I was changed")
arrr = ["find my index", 2, 3, 4]
arrr.indexOf("find my index")
alert(newArr)


//Свойство length
let items = ['shoes', 'shirts', 'socks', 'sweaters'];
items.length;



//Использование методов работы с массивами
let firstArr = [1,1,1,1,1]
let coppieddArr
coppieddArr = firstArr.slice()


let numbers = [1, 4, 9];
let doubles = numbers.map(function(num) {
  return num * 2;
});


const userNames = ['petya', 'vasya', 'evgeny'];
for (let i = 0; i < userNames.length; i += 1) {
  console.log(userNames[i]);
}


let aarr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
aarr.forEach(function(item, i, aarr) {
  alert( i + ": " + item + " (Alfabet:" + aarr + ")" );
});


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);


const summ = [1, 2, 3].reduce((Sum, a) => Sum + a, 2);



const digits = [11, 20, 10, 21];
digits.sort()


const fruits = ['cherry', 'apple', 'banana'];
function check(arr, val) {
  return arr.some(arrVal => val === arrVal);
}



function morethten(x, y, z) {
    return element >= 10;
}
[10,20,30,40].every(morethten)



//Деструктуризация 
k = [56,12,54]
k1 = [53, 54, 12]
let [x1,x2,x3] = new Set(k)
let [y1, y2, y3] = new Set(k1)



//задача
function createAndFill(size, content) {
    const a = [];
    for (let num = 0; num <= size; num++) {
        a.push(content);
    }
    return a
}