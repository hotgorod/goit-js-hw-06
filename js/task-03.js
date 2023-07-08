// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

//   Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeImageElement = ({url, alt}) => {
  return `<img src=${url} alt=${alt}>`
}

const imageElements = images.map(makeImageElement).join('')
console.log(imageElements);
const gallery = document.querySelector('.gallery')
gallery.insertAdjacentHTML("beforeEnd", imageElements)


// const imageEl = document.createElement('img')
// imageEl.src = images.url;
// imageEl.alt = images.alt;
// console.log(imageEl);

// const listEl = document.createElement('li')
// console.log(listEl);
// listEl.append(imageEl)

// const makeImageElement = images => {
//   const imageEl = document.createElement('img')
// imageEl.src = images.url;
//   imageEl.alt = images.alt;
//   imageEl.width = 500
// const listEl = document.createElement('li')
//   listEl.append(imageEl)
//   return listEl
// }


// console.log(makeImageElement(images[0]));

// const imageElements = images.map(makeImageElement)
// console.log(imageElements);

// const gallery = document.querySelector('.gallery')
// gallery.append(...imageElements)