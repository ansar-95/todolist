import { data } from "../Model/data";
import { createEl, addAttribute } from "../View/generic";
export const addTodoToModel = (name) => {
  let element = { title: name, list: [] };
  data.push(element);
};

export const getTodoToModel = (parent) => {
  if (data.length !== 0) {
    data.forEach((element) => () => {
      createEl("h5", element.title, "text-lg px-3", parent);
    });
  }

  const add = createEl("h5", "+", "text-lg px-3", parent);
  addAttribute(
    add,
    ["data-bs-toggle", "modal"],
    ["data-bs-target", "#exampleModalFullscreen"],
    ["type", "button"],
    ["id", "addTodoItem"]
  );
  return parent;
};
export const editTodoTitle = (old, newName) => {
  const index = data.findIndex((x) => x.title === old);
  data[index].title = newName;
};

export const removeTodo = (name) => {
  data.splice(
    data.findIndex((obj) => obj.title === name),
    1
  );
  console.log(data);
};
