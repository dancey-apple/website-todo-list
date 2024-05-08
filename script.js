const todoValue = document.getElementById('todoText');
const todoAlert = document.getElementById('alert-message');
const listItems = document.getElementById('list-items');
const addUpdate = document.getElementById('add-item');

let todo = JSON.parse(localStorage.getItem('todo-list'));
if (!todo) {
    todo = [];
}

function createToDoItem(){
    let inputValue = checkForEmptyValue();
    let dupeValue = checkForDuplicate();
    if (!inputValue){
        let li = document.createElement('li');
        const todoItems = `<div title="Hit Double Click and Complete" ondblclick='CompletedToDoItems(this)'>${todoValue.value}</div><div><button class="edit todo-controls" onclick='updateToDoItems(this)'>Edit</button><button class='delete todo-controls' onclick='deleteTodoItems(this)'>Delete</button></div></div>`;
        li.innerHTML = todoItems;
        listItems.appendChild(li);
        todoAlert.innerText = "You added a new todo item. Get to work!";
    }
    console.log(todo);
}
function checkForEmptyValue(){
    if (todoValue.value === "" || todoValue.value === null){
        todoAlert.innerText = "Uhm.... you didn't add anything.";
        return true;
    }else{
        return false;
    }
}
function checkForDuplicate(){
    todo.forEach((element) => {
        if (element.item == todoValue.value){
            todoAlert.innerText = "You already added this item, dude. -_-";
            return true;
        }
    })
}

function setLocalStorage(){
    localStorage.setItem('todo-list', JSON.stringify(todo));
}