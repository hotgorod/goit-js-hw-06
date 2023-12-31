// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0
const buttonDec = document.querySelector('#counter button[data-action="decrement"]')

const buttonInc = document.querySelector('#counter button[data-action="increment"]')

const valueShown = document.querySelector('#value')

buttonDec.addEventListener('click', onButtonDecClick);

function onButtonDecClick() {
    counterValue -= 1;
    valueShown.textContent = counterValue
}

buttonInc.addEventListener('click', onButtonInkClick);

function onButtonInkClick() {
    counterValue += 1;
    valueShown.textContent = counterValue
}
