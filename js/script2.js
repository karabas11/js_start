// for (let vasy = 1; vasy <= 15; vasy += 2) {
//   console.log(vasy+1);
// }
// console.log('Усе');

// Напиши скрмпт который подсчитывает общую сумму зарплат работников,
// Кол-во работников зраниться в переменной employees
// зп каждого работніка это число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в кансоль

// Цыклом for перебираем количество сотрудников(employees) в каждой итерации
// генерирую случайним Math.random(500, 5000) зп сотрудника и записываю
// ее во временную переменную temp в каждой итерации.
// Привыходе из цыкла присваиваю значение temp переменной totalSelary
// и консолю totalSelary


let totalSelary = 0;

const employees = 5;
let personeSellary = 0;

// let personeSellary = (Math.round(Math.random() * (5000 - 500) + 1));

// console.log(personeSellary); 
// console.log(employees);

// for (let i = 1; i <= employees; i += 1) {
//   // console.log(i);
//   personeSellary = Math.round(Math.random() * (5000 - 500) + 500);
//   // personeSellary = (Math.round(Math.random() * (5000 - 500) + 1));
//   console.log(`Зарплата сотрудника № ${i} :` , personeSellary);
//   totalSelary = totalSelary + personeSellary;
//   // console.log(totalSelary); 
// };
// // console.log(personeSellary); 
// console.log(totalSelary);

// Напиши скрипт который подсчитывает общую сумму всех четных чисел,
// которые входят в диапазон в переменных от min до max
// Например, если мин=0 а мах=5,

// Создаем цикл от min до max, итерируем диапазон
// в теле цыкла проверяем делится ли число из диапазона
// на 2 без остатка и если да то сумируем с результирующей суммой

let total = 0;
let min = 0;
let max = 5;

// for (let i = 0; i <= max; i += 1) {
//   // console.log(i);
//   if (i % 2 === 0) {
//       console.log(i);
//     total = total + i;
//   }
//   // console.log(total);
// }
//   console.log(total);

// for (let vasy = 1; vasy <= 15; vasy += 2) {
//   console.log(vasy+1);
// }
// console.log('Усе');

for (let i = min; i <= max; i += 1) {
	if (i % 2 !== 0) {
		console.log('не четное число', i);
		continue;
	}
	console.log('четное число', i);
	total += i;
}
console.log('Сумма четных чисел', total);
