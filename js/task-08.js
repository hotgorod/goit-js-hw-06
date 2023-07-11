// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде 
// ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
// ==========================================================================================

const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
  
    let emptyInputFound = false;

    for (let i = 0; i < event.currentTarget.elements.length; i++) {
        const emptyInput = event.currentTarget.elements[i];
        if (emptyInput.tagName === 'INPUT' && emptyInput.value === '') {
            emptyInputFound = true;
            break;
        }
    }

    if (emptyInputFound) {
        alert('всі поля повинні бути заповнені');
        return;
    }

    const mail = event.currentTarget.elements.email.value
    const password = event.currentTarget.elements.password.value
    
    const dataForm = {
        mail, password
    }
    console.log(dataForm);
    event.currentTarget.reset()
}



// ================================================
// left it for myself
// ================================================
    // const formData = new FormData(event.currentTarget);
    // let requareAlert = false;
    // formData.forEach((value, name) => {
    //     console.log('name - ', name);
    //     console.log('value - ', value);
    // })