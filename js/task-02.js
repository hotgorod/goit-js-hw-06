// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.




const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const elementsLi = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item')
  return li
});

const listIngridients = document.querySelector('#ingredients')
listIngridients.append(...elementsLi)
console.log(listIngridients);
