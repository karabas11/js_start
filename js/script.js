let balance = 10000;
const paiment = 2000;
const resalt = balance - paiment;


const message = balance >= paiment
  ? console.log(`На счету осталось ${resalt} кредитов. Операция завершина`)
  : console.log(`На счету не достаточно средств. Операция завершина`);

balance = resalt
console.log(balance);

// 

const apples = 47
const grapes = 135
const total = apples + grapes
console.log(total);
const diff = grapes - apples
console.log(diff);

// 

let students = 100
// students = students + 50
students += 50
console.log(students);

// 

const result = 108 + 223 - 2 * 5
console.log(result);

// 

// Наш скрипт, который выводит в консоль
// результат округления вниз или вверх,
// значений переменной vaiue.
// Используя методы 
// Math.floor(), 
// Math.ceil(),
// Math.round().

// Используй значения 27.3 и 27.9 и 27.5

const value = 27.9
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));

// 

// Создай предложение с помощью шаблонных строк
// A has
// B bots in stock
// где A и B переменные вставленные в строку

const companyName = "Cisco"
const repairBots = 150
const defenceBots = 50
const massage = `"${companyName}" has ${repairBots + defenceBots} bots in stock`

console.log(massage);

// Методы строк и чейнинг

// Наш скрипт который расчитывает индекс массы тела человека.
// Для этого необходимо разлелить массу тела (кг)
// на квадрат роста человека (м)

// Вес и рост сохраняяются в  переменных weigth и height но не как число, а в виде строк
// Дробные числа могут быть заданны в виде 24.7 или 27,7 

// Индекс массы тела необходимо округлить до одного значения после запятой

let weigth = '88,3'
weigth = Number(weigth.replace(',','.'))
let height = '1.75'
height = Number(height.replace(',','.'))

console.log(weigth);
console.log(typeof(weigth));
console.log(height);
console.log(typeof(height));

const bmi = weigth / Math.pow(height,2)

console.log(bmi.toFixed(1));
console.log(typeof(bmi));

