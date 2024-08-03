// lista de tareas
let tasks =  JSON.parse(localStorage.getItem("tasks"))  || [];

// funcion para llevar las tareas
export const getTasks = () => tasks;

//funcion para agregar una tarea 
export const addTask = (task) => {
    const newTas = {
        "id": Date.noe(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};