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

const dedlineDay = 4;

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
