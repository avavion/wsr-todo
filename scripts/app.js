const init = () => {

    const input = document.getElementById("inputAddTodo");
    const todoList = document.querySelector(".todos");

    // Создание ToDo
    const createTodo = () => {

        // Элемент списка todos
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.setAttribute("data-todo-id", "1");

        // Текст задачи todo-item__text
        const span = document.createElement("span");
        span.classList.add("todo-item__text");
        span.append(input.value);

        // Кнопка удаления todo-item
        const deleteButton = document.createElement("span");
        deleteButton.classList.add("todo-item__trash");
        deleteButton.append("Удалить");

        // Добавляем все в todos
        todoList.appendChild(li).append(span, deleteButton);
        input.value = "";
        localStorage.setItem("todos", todoList.innerHTML);
        listenDeleteTodo(deleteButton);
    };

    // Удаление ToDo
    const listenDeleteTodo = (element) => {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();
            event.stopPropagation();
            localStorage.setItem("todos", todoList.innerHTML);
        })
    };

    const todoCheck = (event) => {
        if(event.target.classList.contains("todo-item")){
            event.target.classList.toggle("checked");
            localStorage.setItem("todos", todoList.innerHTML);
        }
    }

    const renderTodos = () => {
        const data = localStorage.getItem("todos");
        if(data){
            todoList.innerHTML = data;
        }
        const deleteButtons = document.querySelectorAll(".todo-item__trash");
        for(const button of deleteButtons){
            listenDeleteTodo(button);
        }
    };

    input.addEventListener("keypress", (key) => {
        const keyEnter = 13;
        if (key.which == keyEnter) {
            createTodo();
        }
    });

    todoList.addEventListener("click", todoCheck);
    renderTodos();

};


window.addEventListener("DOMContentLoaded", init);