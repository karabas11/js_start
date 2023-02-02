let balance = 10000;
const paiment = 2000;
const resalt = balance - paiment;


const message = balance >= paiment ? console.log(`На счету осталось ${resalt} кредитов. Операция завершина`) : console.log(`На счету не достаточно средств. Операция завершина`);

balance = resalt
console.log(balance);