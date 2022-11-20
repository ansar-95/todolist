import { createEl, addAttribute } from "./generic";
import { addTodo } from "./addTodo";
import { addList } from "./addList";
import { editTodo } from "./editTodo";
import { getTodoToModel, removeTodo } from "../Controller/todoController";
import { listFrom } from "../Controller/listController";
import { data } from "../Model/data";
const app = document.getElementById("app");
app.classList = "min-h-screen";
//Todo
const toDoArea = createEl("div", undefined, "flex border-b-2", app);
const todoItem = createEl(
  "div",
  undefined,
  "flex border-2 rounded-t-lg",
  toDoArea
);
addAttribute(todoItem, ["id", "todoItems"]);
getTodoToModel(todoItem);
//action
const actionArea = createEl(
  "div",
  undefined,
  "flex justify-between border-b-2",
  app
);

const addOrEditOrDeleteArea = createEl(
  "div",
  undefined,
  "flex py-3",
  actionArea
);
const add = createEl(
  "i",
  undefined,
  "fa-solid fa-plus px-2",
  addOrEditOrDeleteArea
);

const edit = createEl(
  "i",
  undefined,
  "fa-solid fa-pen-to-square px-2",
  addOrEditOrDeleteArea
);
const toDelete = createEl(
  "i",
  undefined,
  "fa-solid fa-trash px-2",
  addOrEditOrDeleteArea
);
const chechArea = createEl("div", undefined, "flex py-3", actionArea);
const check = createEl(
  "i",
  undefined,
  "fa-sharp fa-solid fa-circle-check px-2",
  chechArea
);

//list
const list = createEl("div", undefined, "flex flex-wrap", app);
addAttribute(list, ["id", "list"]);
/*const item = createEl("div", "ffeef", "basis-full border-b-2	", list);
const itemC = createEl("div", "ffeef", "basis-full border-b-2", list);
*/
console.log(data);
//Modal
const addtodo = addTodo(app);
const addListFromModal = addList(app);
const editTitileTodo = editTodo(app);
document.getElementById("addTodoItem").addEventListener("click", (event) => {
  const modal = document.getElementById("exampleModalFullscreen");
  modal.classList.remove("hidden");
});

add.addEventListener("click", (event) => {
  const modal = document.getElementById("addListModal");
  modal.classList.remove("hidden");
});

edit.addEventListener("click", (event) => {
  const modal = document.getElementById("editTodoModal");
  modal.classList.remove("hidden");
});

toDelete.addEventListener("click", (event) => {
  let newToDoTitle;
  document.querySelectorAll("#todoItems > h5").forEach((element, index) => {
    let before = document.querySelectorAll("#todoItems > h5");
    if (element.ariaSelected === "true") {
      removeTodo(element.textContent);
      const list = document.getElementById("list");
      if (list.children.length > 0) {
        while (list.firstChild) {
          list.removeChild(list.firstChild);
        }
      }
      if (index === 0) {
        before = before[0];
        before.setAttribute("aria-selected", "true");
      } else {
        before = before[index - 1];
        before.setAttribute("aria-selected", "true");
        let beforelist = listFrom(before.textContent);
        beforelist.forEach((element) => {
          createEl(
            "div",
            element,
            "basis-full border-b-2",
            document.getElementById("list")
          );
        });
      }

      element.remove();
    }
  });
});
