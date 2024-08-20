/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   toggleTask: () => (/* binding */ toggleTask)
/* harmony export */ });
// lista de tareas
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// funcion para llevar las tareas
var getTasks = function getTasks() {
  return tasks;
};

//funcion para agregar una tarea 
var addTask = function addTask(task) {
  var newTask = {
    id: Date.now(),
    text: task,
    completed: false
  };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//funcióm para eliminar una tarea
var deleteTask = function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== parseInt(id);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Funcion para actualizar una tarea 
var toggleTask = function toggleTask(id) {
  tasks = tasks.map(function (task) {
    if (task.id === parseInt(id)) {
      task.completed = !task.completed;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTask: () => (/* binding */ renderTask)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
//importar la funcion para traer las tareas de localStorage


//funcion para visualizar las tareas
var renderTask = function renderTask() {
  var taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  var tasks = (0,_task__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
  tasks.forEach(function (task) {
    var li = document.createElement("Li");
    li.setAttribute("data-id", task.id);
    if (task.completed === true) {
      li.classList.add("completed");
    }
    li.innerHTML = "\n       ".concat(task.text, "\n       <div class=\"buttons\">\n       <button class=\"delete\"> Borrar </button>\n       <button class=\"toggle\"> ").concat(task.completed === true ? "Regresar" : "Completado", "    </button>\n       </div>\n       ");
    taskList.appendChild(li);
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


document.addEventListener("DOMContentLoaded", function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.renderTask)();
  document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var taskInput = document.getElementById("task-input").value;
    if (taskInput !== "") {
      (0,_task__WEBPACK_IMPORTED_MODULE_0__.addTask)(taskInput);
      (0,_ui__WEBPACK_IMPORTED_MODULE_1__.renderTask)();
      //limpiar cuadro de texto
      document.getElementById("task-input").value = "";
    }
  });
  document.getElementById("task-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      var taskId = e.target.closest('li').getAttribute("data-id");
      (0,_task__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(taskId);
      (0,_ui__WEBPACK_IMPORTED_MODULE_1__.renderTask)();
    }
    if (e.target.classList.contains("toggle")) {
      var _taskId = e.target.closest('li').getAttribute("data-id");
      (0,_task__WEBPACK_IMPORTED_MODULE_0__.toggleTask)(_taskId);
      (0,_ui__WEBPACK_IMPORTED_MODULE_1__.renderTask)();
    }
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map