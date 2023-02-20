'use strict';
// Напиши скрипт обработки покупки в магазине.
// - Баланс пользователя хранится в переменной balance
// - Сумма покупки хранится в переменной  payment
// Перед проверкой вывести сообщуние
//  Общая стоимость заказа ${payment} кредитов. Проверяем колличество доступных средств на счету.
// Если сумма покупки не привышает баланс,
// Вычесть из баланса сумму покупки
// Вывести сообщение  На счету осталось ${balance} кредитов.
// Если сумма покупки превышает баланс
// Вывести сообщение 'На счету недостаточно средств для проведение операции!'
// В конце вывести сообщение 'Операция завершена'

// let customerBalance;
// let paymentThisInvoice;

// Используя конструкцию if else и  prompt, напиши код который запросит
// вопрос "Какое официальное название JavaScript?". toUpperCase
// Если пользователь вводит ECMAScript виводи alert с надписью "Верно - ECMAScript!!".
// Инвче alert 'Незнаете? - ECMAScript!".

// const inPrompt = prompt('Какое официальное название JavaScript?');
// const inСomparison = 'ECMAScript'

// if (inPrompt.toUpperCase() == inСomparison.toUpperCase()) {
// 	alert('Верно - ECMAScript!');
// } else {
// 	alert('Незнаете? - ECMAScript!');
// }

// Напиши скрипт, який виводить у консоль рядок
// 'Це позитивне число', якшо в prompt користувач ввів
// число більше за нуль, виводить у консоль - 'Це нуль'
// Якшо передалі від'ємне число - 'Це від'ємне число' .

// let forResearch = prompt('Введите число для анализа');
// forResearch = Number(forResearch);
// // console.log(forResearch);

// if (forResearch < 0) {
// 	console.log(`${forResearch} - Это ортицательное число`);
// } else if (forResearch === 0) {
// 	console.log(`${forResearch} - Это число 0`);
// } else if (forResearch > 0) {
// 	console.log(`${forResearch} - Это положительное число`);
// } else {
// 	console.log(`Вы ввели не число`);
// }

// Напиши скрипт який перевіряє чі закінчується значення
// змінної link сімволом /. Якщо ні, додай до кінця
// значення link цей символ (endWith())

// Напиши скрипт який перевіряє чи закінчується значення
// змінної link сімволом /. Якщо ні, додай до кінця
// значення link цей символ...

// let link = 'https://somesaite.com/about';

// if (link.endsWith('/') === false) {
//   console.log(link + '/',' Well!');
// } else {
//   console.log('Its OK! - / is already present');
// }

// console.log(link.slice(link.length - 1))

// console.log(link.slice(link.length - 1) === '/');
// console.log(link.endsWith('/'));

// if (!link.endsWith('/')) {
// 	link += '/';
// 	// link = '${linr}/';
// 	// link = link + '/';
// }
// console.log(link);

// Напиши цикл for который выводит в консоль числа
// по увеличению от min до max,
// но только числа кратные 5

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i +=1) {
//   if (i%5 === 0 ){
//     console.log(i);
//   }
// }

// Напиши скрипт для відображення часу дедлайн здачі проєкту.
// Використовуй if else.
// Якщо дедлайн 0 днів - виведи 'Сьогодні'
// Якщо дедлайн 1 день - виведи 'Завтра'
// Якщо дедлайн 2 день - виведи 'Післязавтра'
// Якщо дедлайн 3+ дні - виведи 'Дата в майбутньому'

// const dedlineDay = 4;

// if (dedlineDay === 0) {
//   console.log('Караул - дедлайн СЕГОДНЯ!!!');
// } else if (dedlineDay === 1) {
//   console.log('Торопись - дедлайн ЗАВТРА!!!');
// } else if (dedlineDay === 2){
//   console.log('Соберись - дедлайн ПОСЛЕЗАВТРА!!!');
// } else  {
//   console.log('Балдеем - дата дедлайна в далеком будущем!!!');
// }

// switch (dedlineDay) {
// 	case 0:
// 		console.log('Караул - дедлайн СЕГОДНЯ!!!');
// 		break;
// 	case 1:
// 		console.log('Торопись - дедлайн ЗАВТРА!!!');
// 		break;
// 	case 2:
// 		console.log('Соберись - дедлайн ПОСЛЕЗАВТРА!!!');
//   break
//   default:
// 	console.log('Балдеем - дата дедлайна в далеком будущем!!!');
// }

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch (country) {
//   case 'China':
//     message = "Shipping to China will cost 100 credits";
//     break;

//   case 'Chile':
//     message = "Shipping to Chile will cost 250 credits";
//     break;

//   case 'Australia':
//     message = "Shipping to Australia will cost 170 credits";
//     break;

//   case 'Jamaica':
//     message = "Shipping to Jamaica will cost 120 credits";
//     break;

//   default:
//     message = "Sorry, there is no delivery to your country";
// }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// function makeArray(firstArray, secondArray, maxLength) {
// 	// Change code below this line
// 	const tottalArray = firstArray.concat(secondArray).slice(0, maxLength);
// 	return tottalArray;

// 	// Change code above this line
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
// // console.log(makeArray());

// function calculateTotal(number) {
//   // Change code below this line
//   let sumNumber = 0;
//   for (let i = 1; i <= number; i += 1) { // Change this line
//     sumNumber = sumNumber + i;
//   }
//     return (sumNumber);
//     // Change code above this line
//   }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal(0));
// console.log(calculateTotal(11));

// function findLongestWord(string) {
//   // Change code below this line
// const stringArray = string.split(" ");
// // console.log(stringArray);
// // console.log(stringArray.length);
// // console.log(typeof stringArray);
//   let longestWord = '';
//   // console.log(longestWord.length);
// for (let i = 0; i < stringArray.length; i += 1) {
//   if (longestWord.length < stringArray[i].length) {
//     longestWord = stringArray[i];
//   }
// }
// return longestWord;

// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 	const tottalArray = firstArray.concat(secondArray).slice(0, maxLength);
// title.toLowerCase().split(' ').join('-');

// function createArrayOfNumbers(min, max) {
// 	const numbers = [];
// 	// Change code below this line
//   for (let i = min; i <= max ; i += 1) {
// 	  numbers.push(i);
//     }
// 	// Change code above this line
// 	return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(9, 11));

// Задача 2/23

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// Объявлена функция filterArray(numbers, value)
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// В цикле for использовался метод push

// function filterArray(numbers, value) {
//   let numbersResult = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     // console.log(numbers);
//     // console.log(numbers.length);
//     if (numbers[i] > value) {
//       // console.log(numbers);
//       // console.log(value);
//       numbersResult.push(numbers[i]);
//     }
//   }
// return numbersResult;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Задача 2/24

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false

// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
// Объявлена функция checkFruit(fruit)
// Вызов checkFruit("plum") возвращает true
// Вызов checkFruit("mandarin") возвращает false
// Вызов checkFruit("pear") возвращает true
// Вызов checkFruit("Pear") возвращает false
// Вызов checkFruit("apple") возвращает true
// Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean
// В функции использовался метод includes

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   let result
//   // console.table(fruits);
//   // fruit = fruit.toLowerCase();
//   for (let i = 0; i < fruits.length; i += 1) {
//     //  console.log(fruits[i]);
//     result = fruits.includes(fruit);
//     // fruits = fruits.includes(fruit) ? true : false;

//     return result;
//   }
// }
// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));
// console.log(checkFruit("pear"));
// console.log(checkFruit('Pear'));
// console.log(checkFruit('apple'));

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   let result;
//   // console.table(fruits);
//   // fruit = fruit.toLowerCase();
//   for (const i of fruits) {
//     //  console.log(fruits[i]);
//     result = fruits.includes(fruit);
//     // fruits = fruits.includes(fruit) ? true : false;

//     return result;
//   }
// }
// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));
// console.log(checkFruit('pear'));
// console.log(checkFruit('Pear'));
// console.log(checkFruit('apple'));

// Задача 2/24

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// Объявлена функция getCommonElements(array1, array2)
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
// В цикле for использовались методы includes и push

// function getCommonElements(array1, array2) {
//   const marges1 = array1;
//   const marges2 = array2;
//   const tottalArray = [];
//   for (const marge1 of marges1) {
//     for (const marge2 of marges2) {
//       // console.log(marge1);
//       // console.log(marge2);
//       // console.log(marge1.includes(marge2));
//       if (marges2.includes(marge1) && !tottalArray.includes(marge1)) {
//         tottalArray.push(marge1);
//       }
//     }
//   }
//   return tottalArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([12, 32, 3], [144, 120, 30, 12, 3]));
// console.log(getCommonElements([], []));
// console.log(getCommonElements([1, 3, 5], [0, 8, 5, 3]));
