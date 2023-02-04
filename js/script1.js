//  Напиши скрипт выбора стоимости отеля по кол-ву звезд.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
//  Если в переменной stars что-то кроме 1-5, вивесті строку ' Такого кол-ва звезд нет'

const stars = 2;
let price;

switch (stars) {
  case 1:
  price = 20;
  console.log(`Стоимость номера ${stars} отеля составляет ${price} $`);
  break;

    case 2:
    price = 30;
    console.log(`Стоимость номера ${stars} отеля составляет ${price} $`);
    break;

    case 3:
    price = 50;
    console.log(`Стоимость номера ${stars} отеля составляет ${price} $`);
    break;

    case 4:
    price = 70;
    console.log(`Стоимость номера ${stars} отеля составляет ${price} $`);
    break;

    case 5:
    price = 120;
    console.log(`Стоимость номера ${stars} отеля составляет ${price} $`);
    break;

  default:
    console.log(`Такого кол-ва звезд нет`);
}

// Объединяем условия
// 1 и 2 - 20$, 3 и 4 - 30$, 5 - 120$

const starses = 2;
let prices;

switch (starses) {
  case 1:
  case 2:
  prices = 20;
  console.log(`Стоимость номера ${starses} отеля составляет ${prices} $`);
  break;

    case 3:
    case 4:
    prices = 30;
    console.log(`Стоимость номера ${starses} отеля составляет ${prices} $`);
    break;

    case 5:
    price = 120;
    console.log(`Стоимость номера ${starses} отеля составляет ${prices} $`);
    break;

  default:
    console.log(`Такого кол-ва звезд нет`);
}

// Напиши скрипт выбора опции доставки товара
// Опция храниться в переменной Option:
// 1 - Самовывоз
// 2 - Курьер
// 3 - Почта
// В переменную message записать сообщение в зависимости от опции доставки
// "Вы сможите забрать товар, завтра с 12:00 в нашем офисе"
// "Курьер доставит заказ, завтра с 9:00 до 18:00"
// "Посылка будет отправлкна сегодня"
// "Вам перезвонит менеджер"

const option = 9;
let message = '';

switch (option) {
  case 1:
  //"Самовывоз";
  message = 'Вы сможите забрать товар, завтра с 12:00 в нашем офисе';
  break;

    case 2: 
    // "Курьер":
    message = 'Курьер доставит заказ, завтра с 9:00 до 18:00';
    break;

    case 3:
    // Почта:
    message = 'Посылка будет отправлкна сегодня';

    break;

  default:
    message = 'Вам перезвонит менеджер';
}

console.log(message);

