//importar la funcion para traer las tareas de localStorage
import { getTasks } from "./task";

//funcion para visualizar las tareas
export const renderTask = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    const tasks = getTasks();
    tasks.forEach((task) => {
     const li = document.createElement("Li");
    li.setAttribute("data-id", task.id)

    if(task.completed === true) {
        li.classList.add("completed");
       }

       li.innerHTML = `
       ${task.text}
       <div class="buttons">
       <button class="delete"> Borrar </button>
       <button class="toggle"> ${task.completed === true ? "Regresar" : "Completado" }    </button>
       </div>
       `;

       taskList.appendChild(li);
    });
};