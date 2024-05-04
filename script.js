const todoValue = document.getElementById('todoText');
const todoAlert = document.getElementById('Alert');
const listItems = document.getElementById('list-items');
const addUpdate = document.getElementById('AddUpdateClick');

let todo = JSON.parse(localStorage.getItem('todo-list'));
if (!todo) {
    todo = [];
}

function createToDoItem(){
    if (todoValue.value === ""){
        todoAlert.innerText = "Uhm.... you didn't add anything.";
        todoValue.focus();
    }else {
        let isPresent = false;
        todo.forEach((element) => {
            if (element.item == todoValue.value){
                isPresent = true;
            }
        });
        
        if (isPresent){
            setAlertMessage("You alreay added this item, dude. -_-");
            return;
        }

        let li = document.createElement('li');
        const todoItems = `<div title="Hit Double Click and Complete" ondlclik='CompletedToDoItems(this)">${todoValue.value}</div><div><button class="edit todo-controls" onclick='updateToDoItems(this)'>Edit</button><button class='delete todo-controls' onclick='deleteTodoItems(this)'>Delete</button></div></div>`;
        li.innerHTML = todoItems;
        listItems.appendChild(li);

        if (!todo){
            todo = [];
        }
        let itemList = { item: todoValue.value, status: false};
        todo.push(itemList);
        setLocalStorage();
    }
    todoValue.value = "";
    setAlertMessage("You added a new todo item. Get to work!");
}