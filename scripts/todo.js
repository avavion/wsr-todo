const todoInput = document.querySelector("#inputAddTodo"),
    todoList = document.querySelector(".todos");

const createTodo = () => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.setAttribute("data-checked", "false");
    todoItem.addEventListener("click", changeCompleted);

    const todoContent = document.createElement("span");
    todoContent.classList.add("todo-item__text");
    todoContent.innerText = todoInput.value;

    const todoTrash = document.createElement("span");
    todoTrash.innerText = "Удалить";
    todoTrash.classList.add("todo-item__trash");
    listenerDeleteTodo(todoTrash);

    let todo = {
        content: todoInput.value,
        checked: false
    };
    saveStorage(todo);


    todoList.appendChild(todoItem).append(todoContent, todoTrash);
    todoInput.value = "";
}

const listenerDeleteTodo = (element) => {
    element.addEventListener("click", () => {
        element.parentElement.remove();
    })
}

const changeCompleted = (event) => {
    const element = event.target;
    if(element.classList.contains("todo-item")){
        element.setAttribute("data-checked", "true");
        element.classList.toggle("checked");
    }
}

const changeState = (element) => {
    element.addEventListener("click", (event) => {

    });
}

const saveStorage = (todo) => {
    let todos;
    if(localStorage.getItem("todos") == null){
        todos = [];
    }else{
        todos = localStorage.getItem("todos");
    }

    todos.push(JSON.stringify(todo));
    localStorage.setItem("todos", todos);
}

const checkValue = () => {
    if (todoInput.value.trim() === "") {
        alert("Невозможно добавить пустую задачу!");
    } else {
        createTodo();
    }
}

todoInput.addEventListener("keypress", (key) => {
    const keyEnter = 13;
    if (key.which == keyEnter) {
        checkValue();
    }
});