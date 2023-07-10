// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// ===================================================================


const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')

buttonCreate.addEventListener('click', onButtonCreateClick);

function onButtonCreateClick(event) {
  const input = document.querySelector('input')
  const amount = input.value;
  createBoxes(amount)
}

buttonDestroy.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  destroyBoxes()
  for (let i = 0; i < amount; i += 1){
    const divElement = document.createElement('div');
    divElement.style.width = (30 + i * 10) + "px";
    divElement.style.height = (30 + i * 10) + "px"
    divElement.style.backgroundColor = getRandomHexColor()
    boxes.append(divElement)
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

