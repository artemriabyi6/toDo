let elements = {
    input: document.getElementById('todos-input'),
    addBtn: document.getElementById('add-todo'),
    todosBox: document.getElementById('todos-container'),
}

let counter = 0


function createToDo(key = null, value = null) {
    counter++
   
    const toDoBox = document.createElement('div')
    const toDo = document.createElement('p')
    const deleteBtn = document.createElement('button')
    const toDoKey = key || `todo-box${counter}`
    const todoText = value || elements.input.value

    if (!todoText) return

    toDoBox.classList.add(`todo-box${counter}`)
    toDo.classList.add('todo')
    deleteBtn.textContent = '❌'
    deleteBtn.style.display = 'none'
    deleteBtn.classList.add('delete-btn')
    toDo.textContent = `- ${todoText}`


    toDoBox.append(toDo)
    elements.todosBox.append(toDoBox)
    toDoBox.append(deleteBtn)
    

    elements.input.value = ''


    toDoBox.addEventListener('mouseover', () => {
        deleteBtn.style.display = 'block'
    } )

    toDoBox.addEventListener('mouseout', () => {
         deleteBtn.style.display = 'none'
        
    })

    

    localStorage.setItem( toDoKey , todoText)
    

    deleteBtn.addEventListener('click', (e) => {
        
        
        // const removeItem = toDoBox.className

        toDoBox.remove()
        localStorage.removeItem(`${toDoKey}`)
       
        
       
        counter--
    })
    
    
}

function checkStorage() {

     for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key) 
        // localStorageMap.set(key, value)
        createToDo(key, value)
     }

}

elements.addBtn.addEventListener('click', () => {
    createToDo()
}) 

elements.todosBox.addEventListener('click', (e) => {
    e.target.tagName === 'P' ? e.target.classList.toggle('todo-done') : null
})

document.addEventListener('keypress', (e) => {
    e.key === 'Enter' ? createToDo() : console.log(e.key)
})

document.addEventListener('DOMContentLoaded', checkStorage)



// let elements = {
//     input: document.getElementById('todos-input'),
//     addBtn: document.getElementById('add-todo'),
//     todosBox: document.getElementById('todos-container'),
// };

// let counter = 0;

// // Створення туду
// function createToDo(text = null, key = null) {
//     const todoText = text || elements.input.value.trim(); // Беремо текст із інпуту або переданий
//     if (!todoText) return; // Якщо текст порожній, нічого не робимо

//     counter++;
//     const todoKey = key || `todo-box${counter}`;

//     const toDoBox = document.createElement('div');
//     const toDo = document.createElement('p');
//     const deleteBtn = document.createElement('button');

//     toDoBox.classList.add(todoKey);
//     toDo.classList.add('todo');
//     deleteBtn.textContent = '❌';
//     deleteBtn.style.display = 'none';
//     deleteBtn.classList.add('delete-btn');
//     toDo.textContent = `- ${todoText}`; // Додаємо текст у елемент

//     toDoBox.append(toDo);
//     elements.todosBox.append(toDoBox);
//     toDoBox.append(deleteBtn);

//     elements.input.value = ''; // Очищуємо інпут

//     // Події
//     toDoBox.addEventListener('mouseover', () => {
//         deleteBtn.style.display = 'block';
//     });

//     toDoBox.addEventListener('mouseout', () => {
//         deleteBtn.style.display = 'none';
//     });

//     deleteBtn.addEventListener('click', () => {
//         toDoBox.remove();
//         localStorage.removeItem(todoKey);
//     });

//     // Зберігаємо у localStorage, якщо це новий туду
//     if (!key) {
//         localStorage.setItem(todoKey, todoText);
//     }
// }

// // Завантаження туду зі сховища
// function loadTodos() {
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key);
//         createToDo(value, key); // Створюємо туду
//     }
// }

// // Додавання нового туду
// elements.addBtn.addEventListener('click', () => {
//     createToDo(); // Виклик без параметрів, текст береться з інпуту
// });

// // Перемикання стану туду (виконано/невиконано)
// elements.todosBox.addEventListener('click', (e) => {
//     if (e.target.tagName === 'P') {
//         e.target.classList.toggle('todo-done');
//     }
// });

// // Завантаження збережених туду
// document.addEventListener('DOMContentLoaded', loadTodos);














// document.addEventListener('DOMContentLoaded', () => {
//     let map = new Map()
//     for(let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i)
//         const value = localStorage.getItem(key)
//         map.set(key, value)
//     }
//     console.log(map)
// })

// 












// let elements = {
//     input: document.getElementById('todos-input'),
//     addBtn: document.getElementById('add-todo'),
//     todosBox: document.getElementById('todos-container'),
// };

// let todos = JSON.parse(localStorage.getItem('todos')) || []; // Отримуємо туду зі сховища або створюємо порожній масив

// function createToDo(text) {
//     const toDoBox = document.createElement('div');
//     const toDo = document.createElement('p');
//     const deleteBtn = document.createElement('button');

//     toDoBox.classList.add('todo-box');
//     toDo.classList.add('todo');
//     deleteBtn.textContent = 'delete';
//     deleteBtn.style.display = 'none';
//     deleteBtn.classList.add('delete-btn');
//     toDo.textContent = text || elements.input.value;

//     toDoBox.append(toDo);
//     elements.todosBox.append(toDoBox);
//     toDoBox.append(deleteBtn);

//     elements.input.value = '';

//     // Події для показу/приховування кнопки видалення
//     toDoBox.addEventListener('mouseover', () => {
//         deleteBtn.style.display = 'block';
//     });

//     toDoBox.addEventListener('mouseout', () => {
//         deleteBtn.style.display = 'none';
//     });

//     // Видалення туду
//     deleteBtn.addEventListener('click', () => {
//         toDoBox.remove();
//         todos = todos.filter(todo => todo !== text); // Оновлення масиву
//         localStorage.setItem('todos', JSON.stringify(todos)); // Оновлення localStorage
//     });

//     // Збереження в localStorage, якщо це новий туду
//     if (!text) {
//         todos.push(elements.input.value);
//         localStorage.setItem('todos', JSON.stringify(todos));
//     }
// }

// // Додаємо новий туду по кліку на кнопку
// elements.addBtn.addEventListener('click', () => {
//     if (elements.input.value.trim() !== '') {
//         createToDo();
//     }
// });

// // Завантаження туду зі сховища при завантаженні сторінки
// document.addEventListener('DOMContentLoaded', () => {
//     todos.forEach(todo => createToDo(todo));
// });

// // Маркування туду як виконаного
// elements.todosBox.addEventListener('click', (e) => {
//     if (e.target.tagName === 'P') {
//         e.target.classList.toggle('todo-done');
//     }
// });
