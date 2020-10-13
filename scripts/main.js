const init = () => {
    const todoList = document.querySelector(".todos"),
        inputAddTodo = document.querySelector("#inputAddTodo");

    let todosLength = document.querySelectorAll(".todo-item").length;
    const createTodo = () => {
        let todo = {
            todo: inputAddTodo.value,
            checked: false
        };
        // Элемент списка
        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");

        // Текст задачи
        const todoContent = document.createElement("span");
        todoContent.classList.add("todo-item__text");
        todoContent.append(inputAddTodo.value);

        // Кнопка удаления
        const todoDelete = document.createElement("span");
        todoDelete.classList.add("todo-item__trash");
        todoDelete.append("Удалить");

        todoList.appendChild(listItem).append(todoContent, todoDelete);
        inputAddTodo.value = "";
        deleteTodo(todoDelete);
        saveLocal(todo);
    }

    const deleteTodo = (element) => {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();
        })
        console.log('Удаление ToDo');
    }

    const changeState = (event) => {
        console.log('Изменение состояния');
    }

    const filter = (status) => {
        console.log("Фильтрация ToDo по статусу. (Выполненные, в процессе, все)");
    }

    const saveLocal = (todo) => {
        let todos;
        if(localStorage.getItem("todos") === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const initTodos = () => {
        console.log(localStorage.getItem("todos"));
    }
    initTodos();

    inputAddTodo.addEventListener("keypress", (key) => {
        const keyEnter = 13;
        if(key.which == keyEnter){
            createTodo();
        }
    });

}

window.addEventListener("DOMContentLoaded", init);